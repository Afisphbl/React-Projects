function Step2({ form, setForm }) {
  function inputHandler(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      step2: {
        ...prev.step2,
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
      <h2>Step 2:Address Info</h2>
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          name="country"
          value={form.step2.country}
          onChange={inputHandler}
          className={form.error.er1 && "error-input"}
        />
        {form.error.er1 && <span className="error-text">{form.error.er1}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={form.step2.city}
          onChange={inputHandler}
          className={form.error.er2 && "error-input"}
        />
        {form.error.er2 && <span className="error-text">{form.error.er2}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="street">Email</label>
        <input
          type="text"
          id="street"
          name="street"
          value={form.step2.street}
          onChange={inputHandler}
          className={form.error.er3 && "error-input"}
        />
        {form.error.er3 && <span className="error-text">{form.error.er3}</span>}
      </div>
    </>
  );
}

export default Step2;
