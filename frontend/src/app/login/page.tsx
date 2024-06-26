import { login } from "@/lib";
import { redirect } from "next/navigation";
import LoginButton from "./LoginButton";

export default async function Login() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Acesse sua conta
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
                className="space-y-6"
                action={async (formData) => {
                    'use server';
                    await login(formData);
                    redirect('/')
                }}
                noValidate
            >
                <div className="flex flex-col">
                    <label htmlFor="login" className="block text-sm font-medium leading-6 text-gray-900">
                    Login
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="login"
                            autoComplete="login"
                            required
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
  
                <div className="flex flex-col">
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Senha
                    </label>
                </div>
                <div className="mt-2">
                    <input
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>
  
                <LoginButton />
            </form>
          </div>
        </div>
    )
  }
  