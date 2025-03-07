import React, { useState, useRef } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { RegistrationFormData } from '../../utils/types';
import { countries } from '../../utils/countries';

interface AppProperties {
  userMetaFields?: MetadataItem[];
}

interface MetadataItem {
  id: string;
  name: string;
  isRequired: boolean;
  maxLength?: number;
  placeholder?: string;
}

interface ThirdStepProps {
  t: (key: string) => string;
  appProperties: AppProperties;
  threeStepData: RegistrationFormData;
  onFormUpdated: (updated: boolean) => void;
  goToSecondStepBack: () => void;
  goToFourthStep: (e: React.FormEvent) => void;
}

const ThirdStep: React.FC<ThirdStepProps> = ({
  t,
  appProperties,
  threeStepData,
  goToSecondStepBack,
  goToFourthStep,
}) => {
  const [formUpdated, setFormUpdated] = useState(false);
  const formRef = useRef(null);

  return (
    <Form
      ref={formRef}
      initialValues={threeStepData}
      onFieldsChange={() => setFormUpdated(!formUpdated)}
      className="login-form register-confirmation-form"
    >
      <Form.Item
        label={t('Full address name')}
        name="address"
        className="normal-offset"
      >
        <Input />
      </Form.Item>

      {appProperties?.userMetaFields?.map((item: MetadataItem) => (
        <Form.Item
          key={item.id}
          label={t(item.name)}
          name={item.id}
          rules={[{ required: true, message: t('Field is required') }]}
          className="normal-offset"
        >
          {item.id === 'USER_COUNTRY_ID' ? (
            <Select
              options={countries.map(country => ({
                key: country.key,
                value: country.value,
              }))}
              placeholder={item.placeholder}
              showSearch
            />
          ) : (
            <Input
              maxLength={item.maxLength || 200}
              placeholder={item.placeholder}
            />
          )}
        </Form.Item>
      ))}

      <Form.Item
        label={t('Zipcode')}
        name="zipcode"
        className="normal-offset"
        rules={[{ required: false, message: t('Field is required') }]}
      >
        <Input maxLength={10} placeholder={t('Enter your zipcode')} />
      </Form.Item>

      <div className="register-confirmation-form-buttons">
        <Button
          onClick={goToSecondStepBack}
          className="register-confirmation-form-buttons-link"
        >
          {t('Back to profile information')}
        </Button>

        <Button onClick={goToFourthStep} className="call-to-action-button">
          {t('Next')}
        </Button>
      </div>
    </Form>
  );
};

export default ThirdStep;
