import { useFormik } from "formik";

function Form() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: "Yiğit",
      lastName: "Yüre",
      email: "yigityure@gmail.com",
      gender: "male",
      hobies: [],
      country: "turkey",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
        />

        <br />
        <br />

        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
        />

        <br />
        <br />

        <label htmlFor="email">Email</label>
        <input name="email" value={values.email} onChange={handleChange} />

        <br />
        <br />

        <span>Male</span>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={values.gender === "male"}
          onChange={handleChange}
        />

        <span>Female</span>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={values.gender === "female"}
          onChange={handleChange}
        />

        <br />
        <br />

        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Football"
            onChange={handleChange}
          />
          Football
        </div>

        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Cinema"
            onChange={handleChange}
          />
          Cinema
        </div>

        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Photography"
            onChange={handleChange}
          />
          Photography
        </div>

        <br />
        <br />

        <select name="country" value={values.country} onChange={handleChange}>
          <option value="turkey">Turkey</option>
          <option value="england">England</option>
          <option value="usa">USA</option>
        </select>

        <br />
        <br />

        <button type="submit">Submit</button>

        <br />
        <br />

        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
}

export default Form;
