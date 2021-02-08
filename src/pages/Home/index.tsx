import React, { FormEvent, FunctionComponent, useCallback, useState } from 'react';
import { FiSearch } from 'react-icons/fi'

import { api } from '../../services/api';

import { Container } from './styles';
import { Card } from '../../components/Card';
import { SearchInput } from '../../components/SearchInput';

interface Response {
    avatar_url: string;
    name: string;
}

export const Home: FunctionComponent = () => {
    const [response, setResponse] = useState<Response>({} as Response);
    const [search, setSearch] = useState('');

    const handleForm = useCallback((event: FormEvent)=>{
        event.preventDefault();
        
        if(search) {
            console.log(process.env.URL_GITHUB)
            api.get(search).then((response)=>{
                setResponse(response.data);
            });
        };
    },[search]);

    return (
        <Container>
            <div>
                <form method="get" onSubmit={handleForm}>
                    <SearchInput Icon={FiSearch} placeholder="Usuário do Github" name="search" value={search} onFocus={()=>setSearch('')} onChange={(e)=>setSearch(e.target.value)} />
                </form>
                <Card avatar_url={response.avatar_url} name={response.name} />
            </div>
        </Container>
    );
};