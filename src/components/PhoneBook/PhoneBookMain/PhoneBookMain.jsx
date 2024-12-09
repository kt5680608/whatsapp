import { Box, Avatar, Typography } from "@mui/material"
import { useEffect } from "react"
import { getDateDiff } from "../../../utils/GetDateDiff.util"
import { makeInitial } from "../../../utils/MakeInitial.util"
import { PhoneBookProfile } from "../PhoneBookProfile/PhoneBookProfile"

export const PhoneBookMain = () => { 
        // PhoneBookMain 컴포넌트를 return
        // AvatarConditionRender 함수를 통해 Avatar, Initial 중 어떤 것을 보여줄 지 실행
        // getTimeDiff 함수를 통해 마지막 메세지가 온 시간을 어떻게 보여줄 지 실행

        const dummyData = [
            {
                name: "Jane Doe",
                image: null,
                lastMessageTime: new Date('2024-12-09 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
            ,{
                name: "Mike Jason",
                image: null,
                lastMessageTime: new Date('2024-12-04 15:00:00')
            }
        ]

        // 이미지가 있다면 이미지 출력

    return(
        <Box>
            <Box
                sx = {{
                    padding: '14px',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >        
                {dummyData.map(item => {
                    return (
                        <PhoneBookProfile
                            name = {item.name}
                            image = {item.image}
                            lastMessageTime = {item.lastMessageTime}
                        />
                    )
                })}
            </Box>
        </Box>
    )
}
