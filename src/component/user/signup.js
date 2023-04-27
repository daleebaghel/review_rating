import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";


const AddUser = () => {
    // Initial Schema of formik
    const defaultValue = {
        name: "",
        email: "",
    };

    // validation schema
    const validationSchema = yup.object().shape({
        name: yup.string().required("Please enter name"),
        email: yup.string().required("Please enter your email")
    })
    // 3rd after handle submit
    const handleSubmit = (values) => {
        console.log("Values :", values);
    };

    return (
        <>
            <div className="container bg-warning"> <br></br>
                <div className="col-md-12 text-center">
                    <br></br>
                    <Formik
                        initialValues={defaultValue}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <div className="col-md-10">
                                <Field
                                    type="text" name="name"
                                    placeholder="Enter your name"
                                    className="form-control"
                                />
                                <p className="text-danger">
                                    <ErrorMessage name="name" />
                                </p>
                            </div>
                            <div className="col-md-10">
                                <Field
                                    type="email" name="email"
                                    placeholder="Enter your email"
                                    className="form-control"
                                />
                                <p className="text-danger">
                                    <ErrorMessage name="name" />
                                </p>

                            </div>
                            <button className="btn btn-primary mt-4" type="submit">submit</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default AddUser;