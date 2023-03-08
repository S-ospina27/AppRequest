const host = "http://10.0.2.2:8000";

export default {
    host: host,
    api: {
      auth: {
        login: `${host}/api/companies/create`,
      },
      requirements:{
        create:`${host}/api/companies/requirements/create`,
        read: `${host}/api/companies/requirements/requirementsByclients`,
      }
    },
  };
  