"use server"

const BASEURL = process.env.BASEURL;

export const Register = async (data: { email: string, password: string, username: string }) => {
    try {
        console.log(BASEURL)
        const response = await fetch(`${BASEURL}/auth/users/?format=json`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const result = await response.json();
        console.log(result)
        return result;
    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: "Something went wrong!"
        }
    }
}

export const Login = async (data: { email: string, password: string }) => {
    try {
        const response = await fetch(`${BASEURL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const result = await response.json();
        return result;

    } catch (error) {
        return {
            success: false,
            message: "Something went wrong!"
        }
    }
}