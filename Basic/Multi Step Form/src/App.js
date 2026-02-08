import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

import "./App.css";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState({
    step1: {
      name: "",
      email: "",
    },
    step2: {
      country: "",
      city: "",
      street: "",
    },
    error: {
      er1: "",
      er2: "",
      er3: "",
    },
  });
  return (
    <div className="app-container">
      <div className="wizard-card">
        <ProgressBar currentStep={currentStep} />
        <div className="step-content">
          {currentStep === 1 && <Step1 form={form} setForm={setForm} />}
          {currentStep === 2 && <Step2 form={form} setForm={setForm} />}
          {currentStep === 3 && <Step3 form={form} />}
          <NavigationButtons
            currentStep={currentStep}
            form={form}
            setForm={setForm}
            setCurrentStep={setCurrentStep}
          />
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ currentStep }) {
  return (
    <div className="progress-bar">
      <StepIndicator
        step={1}
        active={currentStep >= 1 && "active"}
        activeLine={currentStep >= 2 && "active"}
      />
      <StepIndicator
        step={2}
        active={currentStep >= 2 && "active"}
        activeLine={currentStep >= 3 && "active"}
      />
      <StepIndicator step={3} active={currentStep >= 3 && "active"} />
    </div>
  );
}

function StepIndicator({ step, active, activeLine = "" }) {
  return (
    <>
      <div className={`step-indicator ${active}`}>{step}</div>
      {step < 3 && <span className={`line ${activeLine}`}></span>}
    </>
  );
}

function NavigationButtons({ currentStep, form, setForm, setCurrentStep }) {
  function nextHandler() {
    if (currentStep === 1) {
      if (!form.step1.name && !form.step1.email) {
        setForm((prev) => ({
          ...prev,
          error: {
            ...prev.error,
            er1: "Full Name is required!",
            er2: "Email is required!",
          },
        }));
        return;
      }
      if (!form.step1.name) {
        setForm((prev) => ({
          ...prev,
          error: {
            ...prev.error,
            er1: "Full Name is required!",
          },
        }));
        return;
      }

      if (!form.step1.name.includes(" ")) {
        setForm((prev) => ({
          ...prev,
          error: {
            ...prev.error,
            er1: 'Invalid Full Name.Full Name should contain " "',
          },
        }));
        return;
      }

      if (!form.step1.email) {
        setForm((prev) => ({
          ...prev,
          error: {
            ...prev.error,
            er2: "Email is required!",
          },
        }));
        return;
      }

      if (!form.step1.email.endsWith("@gmail.com")) {
        setForm((prev) => ({
          ...prev,
          error: {
            ...prev.error,
            er2: 'Invalid Email.Please enter another Email that ends with "@gmail.com"',
          },
        }));
        return;
      }
    }

    if (currentStep === 2) {
      if (!form.step2.country && !form.step2.city && !form.step2.street) {
        setForm((prev) => ({
          ...prev,
          error: {
            ...prev.error,
            er1: "Country is required!",
            er2: "City is required!",
            er3: "Street is required",
          },
        }));
        return;
      }
      if (!form.step2.country) {
        setForm((prev) => ({
          ...prev,
          error: {
            ...prev.error,
            er1: "Country is required!",
          },
        }));
        return;
      }
      if (!form.step2.city) {
        setForm((prev) => ({
          ...prev,
          error: {
            ...prev.error,
            er2: "City is required!",
          },
        }));
        return;
      }
      if (!form.step2.street) {
        setForm((prev) => ({
          ...prev,
          error: {
            ...prev.error,
            er3: "Street is required!",
          },
        }));
        return;
      }
    }
    setForm((prev) => ({
      ...prev,
      error: {
        ...prev.error,
        er1: "",
        er2: "",
        er3: "",
      },
    }));
    setCurrentStep((s) => s + 1);
  }

  function prevHandler() {
    setCurrentStep((s) => s - 1);
  }

  function submitHandler() {
    alert("You have Submit The info succesfully");
  }
  return (
    <div className="navigation-buttons">
      {currentStep > 1 && (
        <button className="btn btn-secondary" onClick={prevHandler}>
          Back
        </button>
      )}
      {currentStep < 3 && (
        <button className="btn btn-primary" onClick={nextHandler}>
          Next
        </button>
      )}
      {currentStep === 3 && (
        <button className="btn btn-success" onClick={submitHandler}>
          Submit
        </button>
      )}
    </div>
  );
}

export default App;
