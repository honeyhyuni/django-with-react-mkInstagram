import React, { useEffect, useMemo, useState} from "react";
import "./SuggestionList.scss";
import { Card } from "antd";
import Suggestion from "./Suggestion";
import useAxios from "axios-hooks";
import { useAppContext } from "store";

// api 조회 목적에선 useAxios 가급적 사용
export default function SuggestionList({style}){
    
    const {store:{jwtToken}} = useAppContext();
    
    const [userList, setUserList] = useState([]);
    
    const headers = {Authorization: `JWT ${jwtToken}`}
    const [{data:origUserList, loading, error}, refetch] = useAxios({
        url:"http://localhost:8000/accounts/suggestions/",
        headers,
    })

    useEffect(() => {
        if (!origUserList) {
            setUserList([]);
        }
        else{
            setUserList(origUserList.map(user=> ({...user, is_follow: false})))
        }
    }, [origUserList]);

    const onFollowUser = (username) =>{
        setUserList(prevUserList => {
            return prevUserList.map(user => 
                (user.username === username) ? {...user, is_follow:true}: user
            )
        })
    }
    

    
    return(
        <div style={style}>
            {loading && <div>Loading...</div>}
            {error && <div>로딩 중에 에러가 발생했습니다.</div>}
            <Card title="Suggestions for you" size="small">
                {userList && userList.map(suggestionUser => 
                    <Suggestion 
                    key = {suggestionUser.username}
                    suggestionUser={suggestionUser}
                    onFollowUser={onFollowUser}
                    />
                )}
            </Card>
        </div>
    );
}


