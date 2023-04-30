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

        
        formData.append("username", fields.username);
        formData.append("password", fields.password);
        formData.append("type", fields.type);
        

        const data = await $fetch(`${apiBase}/user/member/create`, {
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
