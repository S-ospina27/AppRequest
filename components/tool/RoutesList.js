const host = "http://10.0.2.2:8000";

export default {
    host: host,
    api: {
      auth: {
        login: `${host}/api/companies/create`,
      },
      companies:{
        read: `${host}/api/companies/requirements/requirementsByclients`,
      }
    },
  };
  