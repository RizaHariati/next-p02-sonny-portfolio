import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:rizahariati@gmail.com?subject=${data.subject}&body="Hi, my name is ${data.name}. ${data.message}`;
    return;
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center w-screen relative text-center  mx-auto gap-10 max-w-3xl  ">
      <h2 className="uppercase text-gray-500 text-2xl tracking-widest absolute top-20 ">
        CONTACT ME
      </h2>
      <div>
        <h1>I have got just what you need let us talk</h1>
        <p> Phone: 091839502882</p>
        <p> Blebadk@gmail.com</p>
      </div>
      <form
        className="w-full mx-auto grid grid-cols-4 gap-y-2 gap-x-1 max-w-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          className=" col-span-2 input-contact"
          placeholder="Name"
          {...register("name", { required: true })}
        />

        <input
          type="email"
          className=" col-span-2  input-contact "
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <small className="col-span-2">
          {errors.name && <span>This field is required</span>}
        </small>
        <small className="col-span-2">
          {errors.email && <span>This field is required</span>}
        </small>

        <input
          type="text"
          className=" col-span-4  input-contact"
          placeholder="subject"
          {...register("subject", { required: true })}
        />
        <small className="col-span-4">
          {errors.subject && <span>This field is required</span>}
        </small>

        <textarea
          rows={4}
          className=" col-span-4  input-contact"
          placeholder="Message"
          {...register("message", { required: true })}
        />
        <small className="col-span-4">
          {errors.message && <span>This field is required</span>}
        </small>
        <button
          type="submit"
          className="hero-btn mx-auto  col-span-4 bg-pink-500 hover:bg-pink-700 text-white w-full rounded-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
