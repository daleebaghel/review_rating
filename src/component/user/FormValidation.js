import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import figma form './image/figma PNG';


const AddUserIn = () => {
    const defaultValue = {
        name: "",
        email: "",
        password: "",
    };
    const validationSchema = yup.object().shape({
        name: yup.string().required("Please enter name"),
        email: yup.string().required("Please enter your email"),
        password: yup.string().required("please enter your password")
    })
    const handleSubmit = (values) => {
        console.log("Values :", values);
    };
    return (        
    <>
        <div className="container bg-light"><br></br>
            <div className="col-md-12 text-center">
            <h2>signup page by using formic</h2>
            <h3>image in react</h3>
            <img src="{image}"/>
            
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
                        placeholder="enter your name"
                        className="form-control"
                        />
                        <p className="text-danger">
                            <ErrorMessage name="name"/>
                        </p>
                    </div>
                    <div className="col-md-10 mt-4">
                        <Field
                        type="text" name="email"
                        placeholder="enter your password"
                        className="form-control"
                        />
                        <p className="text-danger">
                            <ErrorMessage name="email"/>
                        </p>
                    </div>

                    <div className="col-md-10 mt-4">
                        <Field
                        type="text" name="password"
                        placeholder="enter your password"
                        className="form-control"
                        />
                        <p className="text-danger">
                            <ErrorMessage name="password"/>
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
    export default AddUserIn;
    

  


