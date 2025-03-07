
export const metadataIds = {
  USER_FIRST_NAME_ID: 'user_first_name',
  USER_LAST_NAME_ID: 'user_last_name',
  USER_TITLE_ID: 'user_title',
  USER_NICKNAME_ID: 'user_nickname',
  USER_PHONE_NUMBER_ID: 'user_phone_number',
  USER_CUSTOM_FIELD_1_ID: 'user_custom_field_1',
  USER_CUSTOM_FIELD_2_ID: 'user_custom_field_2',
  USER_FULL_ADDRESS_ID: 'user_full_address',
  USER_CITY_ID: 'user_city',
  USER_COUNTRY_ID: 'user_country',
  USER_STATE_ID: 'user_state',
  USER_ZIP_ID: 'user_zip',
  ORGANIZATION_NAME_ID: 'organization_name',
};

export const clientOrgMetadata = [
  {
    id: metadataIds.USER_FIRST_NAME_ID,
    name: 'First name',
    isRequired: true,
    maxLength: 100,
    isAddressField: false,
  },
  {
    id: metadataIds.USER_LAST_NAME_ID,
    name: 'Last name',
    isRequired: true,
    maxLength: 100,
    isAddressField: false,
  },
  {
    id: metadataIds.USER_TITLE_ID,
    name: 'Title',
    isRequired: false,
    maxLength: 50,
    isAddressField: false,
  },
  {
    id: metadataIds.USER_NICKNAME_ID,
    name: 'Nickname',
    isRequired: false,
    maxLength: 50,
    isAddressField: false,
  },
  {
    id: metadataIds.USER_PHONE_NUMBER_ID,
    name: 'Phone number',
    isRequired: false,
    maxLength: 20,
    isAddressField: false,
  },
  {
    id: metadataIds.USER_CUSTOM_FIELD_1_ID,
    name: 'Custom field 1',
    isRequired: false,
    maxLength: 200,
    isAddressField: false,
  },
  {
    id: metadataIds.USER_CUSTOM_FIELD_2_ID,
    name: 'Custom field 2',
    isRequired: false,
    maxLength: 200,
    isAddressField: false,
  },
  {
    id: metadataIds.USER_FULL_ADDRESS_ID,
    name: 'Full address',
    isRequired: true,
    maxLength: 500,
    isAddressField: true,
  },
  {
    id: metadataIds.USER_CITY_ID,
    name: 'City',
    isRequired: true,
    maxLength: 100,
    isAddressField: true,
  },
  {
    id: metadataIds.USER_COUNTRY_ID,
    name: 'Country',
    isRequired: true,
    maxLength: 100,
    isAddressField: true,
  },
  {
    id: metadataIds.USER_STATE_ID,
    name: 'State/Province',
    isRequired: false,
    maxLength: 100,
    isAddressField: true,
  },
  {
    id: metadataIds.USER_ZIP_ID,
    name: 'ZIP/Postal code',
    isRequired: true,
    maxLength: 20,
    isAddressField: true,
  },
  {
    id: metadataIds.ORGANIZATION_NAME_ID,
    name: 'Organization name',
    isRequired: false,
    maxLength: 200,
    isAddressField: false,
  },
];

export const Patterns = {
  zip: /^[0-9]{5}(-[0-9]{4})?$/,
};

export const Messages = {
  zip: 'Please enter a valid ZIP code',
};
