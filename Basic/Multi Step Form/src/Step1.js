function Step1({ form, setForm }) {
  function inputHandler(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      step1: {
        ...prev.step1,
        [name]: value.trim(),
      },
      error: {
        er1: "",
        er2: "",
        er3: "",
      },
    }));
  }
  return (
    <>
      <h2>Step 1:Personal Info</h2>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.step1.name}
          onChange={inputHandler}
          className={form.error.er1 && "error-input"}
        />
        {form.error.er1 && <span className="error-text">{form.error.er1}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.step1.email}
          onChange={inputHandler}
          className={form.error.er2 && "error-input"}
        />
        {form.error.er2 && <span className="error-text">{form.error.er2}</span>}
      </div>
    </>
  );
}
export default Step1;
