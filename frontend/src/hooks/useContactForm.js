import { useState } from "react";
import toast from "react-hot-toast";

import { submitContactForm } from "@/api/contactApi";

export const useContactForm = (initialValues, requireAgreement = false) => {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [aggred, setAggred] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}))

        setErrors((prev) => ({...prev, [name]: ""}))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name=formData.name.trim();
        const email=formData.email.trim();
        const phone=formData.phone.trim();
        const message=formData.message.trim();
        const newErrors = {}

        const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
        if(!name){
            newErrors.name = "Name is required";
        }
        else if (name.length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        }
        else if (name.length > 50) {
            newErrors.name = "Name cannot exceed 50 characters";
        }
        else if (!nameRegex.test(name)) {
            newErrors.name ="Enter a valid name";
        }
        if(!email){
            newErrors.email = "Email is required";
        }
        if(!phone){
            newErrors.phone = "Phone is required";
        }
        if(!message){
            newErrors.message = "Message is required";
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email && !emailRegex.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }

        const phoneRegex = /^[0-9]{10,15}$/;
        if (phone && !phoneRegex.test(phone)) {
            newErrors.phone = "Please enter a valid phone number";
        }

        if(requireAgreement && !aggred){
            newErrors.agreed = "Please accept the terms and conditions";
        }

        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors)
            return;
        }

        try{
            setLoading(true);
            await submitContactForm(formData);
            toast.success("Form submitted successfully!");
            setFormData(initialValues);
            setErrors({});
            setAggred(false);
            return true;
        }catch(error){
            toast.error(error.response?.data?.message || "Something went wrong");
            return false;
        }finally{
            setLoading(false);
        }
    }

    return {formData, handleChange, handleSubmit, loading, errors, aggred, setAggred}


}