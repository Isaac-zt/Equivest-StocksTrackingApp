'use client';

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import {INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS} from "@/lib/constants";
import { CountrySelectField } from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            fullname: '',
            email: '',
            password: '',
            country: 'US',
            investmentGoals: 'Growth',
            riskTolerance: 'Medium',
            preferedIndustry: 'Technology'
        },
        mode: 'onBlur'
    });

    const onSubmit = async (data: any) => {
        try {
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <h1 className="form-title">Sign Up & Personalize</h1>

            <form onSubmit={handleSubmit(onSubmit)} className={'space-y-5'}>
                <InputField
                  name="full name"
                  label="Full Name"
                  placeholder="Isaac Ekaro"
                  register={register}
                  error={errors.fullname}
                  validation={{ required:'Fullname is required', minLength: 2 }}
                />

                <InputField
                    name="email"
                    label="Email"
                    placeholder="example@gmail.com"
                    register={register}
                    error={errors.email}
                    validation={{ required:'Email is required', pattern: /^\w+@\w+\.\w+$/, message: 'Email address is required' }}
                />

                <InputField
                    name="password"
                    label="Password"
                    placeholder="Enter a strong password"
                    type="password"
                    register={register}
                    error={errors.password}
                    validation={{ required:'Password is required', minLength: 8 }}
                />

                <CountrySelectField
                    name="country"
                    label="Country"
                    control={control}
                    error={errors.country}
                    required
                />

                <SelectField
                 name="investmentGoals"
                 label="Investment Goals"
                 placeholder="Select your investment goal"
                 options={INVESTMENT_GOALS}
                 control={control}
                 error={errors.investmentGoals}
                 required
                />

                <SelectField
                    name="riskTolerance"
                    label="Risk Tolerance"
                    placeholder="Select your risk level"
                    options={RISK_TOLERANCE_OPTIONS}
                    control={control}
                    error={errors.riskTolerance}
                    required
                />

                <SelectField
                    name="preferredIndustry"
                    label="Preferred Industry"
                    placeholder="Select your preferred Industry"
                    options={PREFERRED_INDUSTRIES}
                    control={control}
                    error={errors.preferedIndustry}
                    required
                />
                <Button type="submit" disabled={isSubmitting} className={'yellow-btn w-full mt-5'}>
                    {isSubmitting ? 'Creating Account' : 'Start your Investing Journey'}
                </Button>

                <FooterLink text="Already have an account?" linkText="Sign in" href="/sign-in" />
            </form>
        </>
    );
};

export default SignUp;