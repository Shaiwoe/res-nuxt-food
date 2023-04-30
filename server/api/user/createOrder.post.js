import { readFiles } from 'h3-formidable'
import FormData from 'form-data';
import fs from 'fs';

export default defineEventHandler(async (event) => {
    const { public: { apiBase } } = useRuntimeConfig();
    const token = getCookie(event, 'token')
    
    const { fields, files } = await readFiles(event, {
        includeFields: true,
    })

    try {
        let formData = new FormData();

        
        formData.append("total", fields.total);
        formData.append("amount", fields.amount);
        

        const data = await $fetch(`${apiBase}/user/order/create`, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        return data.data;
    } catch (error) {
        return error
    }
})
