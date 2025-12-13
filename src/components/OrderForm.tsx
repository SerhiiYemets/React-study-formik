import { useId } from "react";

import { Formik, Form, Field } from "formik";
import type { FormikHelpers } from "formik"

import css from "./OrderForm.module.css";

interface OrderFormValues {
    username: string;
    email: string;
    delivery: "pickup" | "courier" | "drone";
    restrictions: "vegan" | "gluten-free" | "nut-free"[];
    deliveryTime: "" | "morning" | "after" | "evening"
    message: string
}

const INITIAL_VALUES: OrderFormValues = {
    username: "",
    email: "",
    delivery: "pickup",
    restrictions: [],
    deliveryTime: "",
    message: ""
}


export default function OrderForm() {
    const fieldId = useId();

    const handleSubmit = (values: OrderFormValues, formikHelpers: FormikHelpers<OrderFormValues>) => {
        console.log(values);
        formikHelpers.resetForm();
    }

    return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form className={css.form}>
            <fieldset className={css.fieldset}>
            <legend className={css.legend}>Client Info</legend>
            <label htmlFor={`${fieldId}-username`} className={css.label}>
                Name
            </label>
            <Field
                type="text"
                name="username"
                id={`${fieldId}-username`}
                className={css.input}
            />
            <label htmlFor={`${fieldId}-email`} className={css.label}>
                Email
            </label>
            <Field
                type="email"
                name="email"
                id={`${fieldId}-email`}
                className={css.input}
            />
            </fieldset>

            <fieldset className={css.fieldset}>
            <legend className={css.legend}>Delivery method</legend>

            <label className={css.option}>
                <Field type="radio" name="delivery" value="pickup" />
                Pickup
            </label>
            <label className={css.option}>
                <Field type="radio" name="delivery" value="courier" />
                Courier
            </label>
            <label className={css.option}>
                <Field type="radio" name="delivery" value="drone" />
                Drone delivery
            </label>
            </fieldset>

            <fieldset className={css.fieldset}>
            <legend className={css.legend}>Dietary restrictions</legend>

            <label className={css.option}>
                <Field type="checkbox" name="restrictions" value="vegan" />
                Vegan
            </label>
            <label className={css.option}>
                <Field type="checkbox" name="restrictions" value="gluten-free" />
                Gluten-free
            </label>
            <label className={css.option}>
                <Field type="checkbox" name="restrictions" value="nut-free" />
                Nut-free
            </label>
            </fieldset>

            <label htmlFor={`${fieldId}-deliveryTime`} className={css.label}>
            Preferred delivery time
            </label>
            <Field
                as="select"
                name="deliveryTime"
                id={`${fieldId}-deliveryTime`}
                className={css.input}
            >
            <option value="" disabled>
                -- Choose delivery time --
            </option>
            <option value="morning">Morning (8:00-12:00)</option>
            <option value="afternoon">Afternoon (12:00-16:00)</option>
            <option value="evening">Evening (16:00-20:00)</option>
            </Field>

            <label htmlFor={`${fieldId}-message`} className={css.label}>
            Additional message
            </label>
                <Field
            as="textarea"
            name="message"
            id={`${fieldId}-message`}
            className={css.input}
            />
            <button type="submit" className={css.button}>
            Place order
            </button>
        </Form>
    </Formik>
    );
}