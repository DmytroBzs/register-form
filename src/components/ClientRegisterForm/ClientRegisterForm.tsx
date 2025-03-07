import React, { useState, useRef } from 'react';
import { FormInstance } from 'antd';
import { RegistrationFormData } from '../../utils/types';
import FirstStep from '../FirstStep/FirstStep';
import SecondStep from '../SecondStep/SecondStep';
import ThirdStep from '../ThirdStep/ThirdStep';
import { Button } from 'antd';

const ClientRegisterForm: React.FC = () => {
  const [registerStep, setRegisterStep] = useState<number>(1);
  const [firstStepData, setFirstStepData] = useState<RegistrationFormData>({});
  const [secondStepData, setSecondStepData] = useState<RegistrationFormData>(
    {}
  );
  const [threeStepData, setThreeStepData] = useState<RegistrationFormData>({});
  const formRef = useRef<FormInstance>(null);

  const hasThreeStep = true;

  const validateAndProceed = async (
    nextStep: number,
    setData: (data: RegistrationFormData) => void
  ) => {
    try {
      const values = await formRef.current?.validateFields();
      setData(values);
      setRegisterStep(nextStep);
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  const goToSecondStep = async (e: React.FormEvent) => {
    e.preventDefault();
    await validateAndProceed(2, setFirstStepData);
  };

  const goToThreeStep = async () => {
    await validateAndProceed(3, setSecondStepData);
  };

  const goToFirstStepBack = () => setRegisterStep(1);
  const goToSecondStepBack = () => setRegisterStep(2);
  const goToFourthStep = async () =>
    await validateAndProceed(4, setThreeStepData);

  return (
    <div>
      {registerStep === 1 && <FirstStep onNext={goToSecondStep} />}
      {registerStep === 2 && (
        <SecondStep
          secondStepData={secondStepData}
          confirmData={firstStepData}
          appProperties={{ hasThreeStep, userMetaFields: [] }}
          goToFirstStepBack={goToFirstStepBack}
          goToThreeStep={goToThreeStep}
        />
      )}
      {registerStep === 3 && (
        <ThirdStep
          t={(key: string) => key}
          appProperties={{ userMetaFields: [] }}
          threeStepData={threeStepData}
          onFormUpdated={() => {}}
          goToSecondStepBack={goToSecondStepBack}
          goToFourthStep={goToFourthStep}
        />
      )}
      {registerStep === 4 && (
        <div>
          <h3>Registration Complete</h3>
          <Button onClick={goToFirstStepBack}>Back to Step 1</Button>
        </div>
      )}
    </div>
  );
};

export default ClientRegisterForm;
