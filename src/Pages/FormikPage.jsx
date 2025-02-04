import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const FormikPage = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      firstname: yup.string().required("This field is required"),
      lastname: yup.string().required("This field is required"),
      email: yup
        .string()
        .required("This field is required")
        .email("This is not a valid email"),
      password: yup
        .string()
        .required("This field is required"),
    }),
  });
  // console.log(formik.values)
  console.log(formik.touched)
  return (
    <>
      <h2>Sign Up Form</h2>
      <form className="col-7 mx-auto" action="" onSubmit={formik.handleSubmit}>
        <input className= {formik.errors.firstname && formik.touched.firstname ? "form-control is-invalid mb-3" : "form-control mb-3"}
          type="text"
          placeholder="First Name"
          onChange={formik.handleChange}
          name="firstname"
          onBlur={formik.handleBlur}
        />
        <small className="text-danger mb-3">{formik.touched.firstname && formik.errors.firstname}</small>
        <input className= {formik.errors.lastname && formik.touched.lastname ? "form-control is-invalid mb-3" : "form-control mb-3"}
          type="text"
          placeholder="Last Name"
          onChange={formik.handleChange}
          name="lastname"
          onBlur={formik.handleBlur}
        />
       <small className="text-danger mb-3">{formik.touched.lastname && formik.errors.lastname}</small>
        <input className= {formik.errors.email && formik.touched.email ? "form-control is-invalid mb-3" : "form-control mb-3"}
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          name="email"
          onBlur={formik.handleBlur}
        />
        <small className="text-danger mb-3">{formik.touched.email && formik.errors.email}</small>
        <input className= {formik.errors.password && formik.touched.password ? "form-control is-invalid mb-3" : "form-control mb-3"}
          type="text"
          placeholder="Password"
          onChange={formik.handleChange}
          name="password"
          onBlur={formik.handleBlur}
        />
        <small className="text-danger mb-3">{formik.touched.password && formik.errors.password}</small>
        <button className="btn btn-success w-100 mb-3" type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormikPage;
