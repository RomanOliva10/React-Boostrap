export default function errorHandle(errors) {
  return {
    email() {
      return errors.email && <div>{errors.email}</div>;
    },

    name() {
      return errors.name && <div>{errors.name}</div>;
    },
    phone() {
      return errors.phone && <div>{errors.phone}</div>;
    },
    message() {
      return errors.message && <div>{errors.message}</div>;
    }
  };
}
