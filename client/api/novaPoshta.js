import axios from "axios"

export async function getNovaPoshtaCities(string) {
    console.log(string)
    console.log(process.env.NOVA_POSHTA_API_KEY)

    const data = await axios.post("https://api.novaposhta.ua/v2.0/json/", {
        apiKey: process.env.NOVA_POSHTA_API_KEY,
        modelName: "Address",
        calledMethod: "searchSettlements",
        methodProperties: {
            CityName: string,
            Limit: "50",
            Language: "UA",
        },
    })

    console.log(data.data)

    return data.data
}
