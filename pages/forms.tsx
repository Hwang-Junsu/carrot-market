import {FieldError, FieldErrors, useForm} from "react-hook-form";

interface IRegister {
    username: string;
    email: string;
    password: string;
}

export default function Forms() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<IRegister>({mode: "onChange"});
    const onValid = (data: IRegister) => {
        console.log(data);
    };
    const onInvalid = (error: FieldErrors) => {
        console.log(error);
    };
    return (
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
            <input
                {...register("username", {required: true})}
                type="text"
                placeholder="Username"
            />
            <input
                {...register("email", {
                    required: true,
                    validate: {
                        notGmail: (value) =>
                            !value.includes("@gmail.com") ||
                            "Gmail is not allowed",
                    },
                })}
                type="email"
                placeholder="Email"
            />
            {errors.email?.message}
            <input
                {...register("password", {required: true})}
                type="password"
                placeholder="Password"
            />
            <input type="submit" value="Create Account" />
        </form>
    );
}
