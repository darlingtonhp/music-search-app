import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Checkbox from "@/Components/Checkbox";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({
  status,
  canResetPassword,
  canLoginWithGoogle,
}) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route("login"));
  };

  return (
    <GuestLayout>
      <Head title="Log in" />

      {status && (
        <div className="mb-4 font-medium text-sm text-green-600">{status}</div>
      )}

      <form onSubmit={submit}>
        <div>
          <InputLabel htmlFor="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            isFocused={true}
            onChange={(e) => setData("email", e.target.value)}
          />

          <InputError message={errors.email} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password" value="Password" />

          <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="current-password"
            onChange={(e) => setData("password", e.target.value)}
          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="block mt-4">
          <label className="flex items-center">
            <Checkbox
              name="remember"
              checked={data.remember}
              onChange={(e) => setData("remember", e.target.checked)}
            />
            <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
              Remember me
            </span>
          </label>
        </div>

        <div className="flex items-center justify-end mt-4">
          {canResetPassword && (
            <Link
              href={route("password.request")}
              className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            >
              Forgot your password?
            </Link>
          )}

          <PrimaryButton className="ms-4" disabled={processing}>
            Log in
          </PrimaryButton>
        </div>
      </form>

      {canLoginWithGoogle && (
        <div className="bg-white p-4 rounded-lg mt-2">
          <a
            href="/auth"
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5.121 9.262c-.348-.01-.637-.23-.863-.454-.222-.222-.398-.528-.398-.948 0-.434.156-.785.453-1.078l1.5-1.541c.23-.222.546-.348.895-.348.345 0 .653.126.883.348.246.253.393.625.393 1.069 0 .408-.133.67-.408 1.035-.225.229-.56.494-.88.725-.59.416-1.047.79-1.258 1.178-.15.272-.223.624-.223 1.046 0 .449.138.847.41 1.195.266.347.646.58 1.078.58.309 0 .627-.126.944-.393.29-.229.672-.541 1.045-.914v.2c0 .373.113.652.26.867.183.24.47.373.837.373.269 0 .524-.087.782-.248.234-.15.462-.364.658-.63.219-.298.389-.672.506-1.107h-1.762c-.029.192-.087.412-.174.547-.112.174-.314.324-.55.324-.186 0-.347-.1-.477-.262-.184-.244-.293-.573-.293-.99 0-.448.126-.8.354-1.088.266-.29.632-.472 1.085-.472.254 0 .463.081.63.259.172.183.261.435.261.765 0 .332-.096.573-.269.752-.15.144-.385.253-.637.253-.195 0-.384-.081-.541-.219-.219-.219-.319-.566-.319-1.032 0-.521.156-.902.456-1.257.301-.355.753-.557 1.327-.557.36 0 .657.094.9.269.211.15.373.357.482.612.106.25.16.564.16 1.011 0 .505-.121.88-.362 1.229-.255.368-.615.602-1.018.67-.13.02-.256.03-.365.03z" />
              <path d="M17.502 9.22c0-.77-.057-1.362-.158-1.754h-8.44v3.31h4.694c-.201 1.027-1.33 2.853-4.694 2.853-2.819 0-5.127-2.382-5.127-5.32 0-2.937 2.308-5.32 5.127-5.32 1.58 0 2.635.666 3.256 1.39l2.23-2.156c-1.09-1.04-2.488-1.677-5.059-1.677-4.224 0-7.729 3.392-7.729 7.547 0 4.155 3.505 7.547 7.73 7.547 4.396 0 6.526-3.188 6.897-4.847.104-.47.157-1.079.157-1.754z" />
            </svg>
            Sign in with Google
          </a>
        </div>
      )}
    </GuestLayout>
  );
}
