function Step3({ form }) {
  let stepKeys = [...Object.keys(form.step1), ...Object.keys(form.step2)];

  stepKeys = stepKeys.map((key) => {
    return key.replace(key[0], key[0].toUpperCase());
  });

  const stepValues = [
    ...Object.values(form.step1),
    ...Object.values(form.step2),
  ];
  return (
    <>
      <h2>Step 3: Review Details</h2>
      <div>
        {stepKeys.map((key, i) => {
          return (
            <div className="review-group">
              <strong>{key}:</strong>
              <span>{stepValues[i]}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Step3;
