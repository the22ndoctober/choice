import axios from "axios"

export async function getNovaPoshtaCities(string) {
    const data = await axios.post("https://api.novaposhta.ua/v2.0/json/", {
        apiKey: process.env.NOVA_POSHTA_API_KEY,
        modelName: "Address",
        calledMethod: "searchSettlements",
        methodProperties: {
            CityName: string,
            Limit: "5",
            Language: "UA",
        },
    })

    console.log(data.data.data)

    return data.data.data
}

export async function getNovaPoshtaDepartment(cityName, departmentName) {
    const data = await axios.post("https://api.novaposhta.ua/v2.0/json/", {
        apiKey: process.env.NOVA_POSHTA_API_KEY,
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: {
            FindByString: departmentName,
            CityName: cityName,
            Limit: "5",
            Language: "UA",
        },
    })

    return data.data.data
}
