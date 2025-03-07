import { useState } from 'react';
import { Form, Button, Input } from 'antd';
import { RegistrationFormData, ProfileData } from '../../utils/types';

const useTranslation = () => ({
  t: (key: string) => key,
});

interface SecondStepProps {
  secondStepData: RegistrationFormData;
  confirmData: RegistrationFormData;
  appProperties: AppProperties;
  goToFirstStepBack: () => void;
  goToThreeStep: () => void;
}

interface AppProperties {
  hasThreeStep: boolean;
  userMetaFields: ProfileData[];
}

const SecondStep = ({
  secondStepData,
  confirmData,
  appProperties,
  goToFirstStepBack,
  goToThreeStep,
}: SecondStepProps) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormChange = async () => {
    try {
      await form.validateFields();
      setIsFormValid(true);
    } catch {
      setIsFormValid(false);
    }
  };

  return (
    <Form
      form={form}
      initialValues={{ ...secondStepData, ...confirmData }}
      onValuesChange={handleFormChange}
      className="login-form register-confirmation-form"
    >
      <Form.Item
        className="normal-offset"
        label={t('Organization Name')}
        name="organization"
        rules={[{ required: true, message: t('This field is required') }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        className="normal-offset"
        label={t('Your phone number')}
        name="phone"
        rules={[{ required: true, message: t('This field is required') }]}
      >
        <Input />
      </Form.Item>

      <div className="register-confirmation-form-buttons">
        <Button
          onClick={goToFirstStepBack}
          className="register-confirmation-form-buttons-link"
        >
          {t('Back to password creation')}
        </Button>

        <Button
          onClick={goToThreeStep}
          className="call-to-action-button"
          disabled={isFormValid}
        >
          {t(appProperties.hasThreeStep ? 'Next' : 'Done')}
        </Button>
      </div>
    </Form>
  );
};

export default SecondStep;
