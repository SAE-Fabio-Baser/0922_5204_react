interface BackendResponse {
    success: boolean
    data?: Record<string, any>
    error?: string
}

function login(email: string, password: string) {
    console.log("Login: ", { email, password });

    const body = {
        email, password
    }

    function handleResponse(response: BackendResponse) {

        if (response.success && response.data?.token) {

            sessionStorage.setItem("sae_token", response.data.token)

        }

    }

    fetch("http://localhost:3000/auth/login", { method: "post", body: JSON.stringify(body), headers: { 'Content-Type': "application/json" } })
        .then(res => res.json())
        .then(handleResponse)
        .catch(console.error)
}

async function register(email: string, password: string): Promise<BackendResponse> {
    console.log("Register: ", { email, password });

    const body = {
        email, password
    }

    const rawResponse = await fetch("http://localhost:3000/auth/register", {
        method: "post", body: JSON.stringify(body), headers: {
            'Content-Type': "application/json"
        }
    })

    const responseData : BackendResponse = await rawResponse.json()

    return responseData

}

export const auth = {
    login, register
}
