import styled from 'styled-components'

const Container = styled.main`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1{
        margin: 90px auto 10px auto;

        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF;
    }

    .lines{
        height: 55%;
        overflow-y: scroll;
    }

    .line{
        width: 100%;
        padding: 0 10px;
        margin-top: 10px;
        box-shadow: 0px 0px 8px 5px rgba(23,26,33,0.92);

        display: flex;

        img{
            width: 120px;
            height: 80px;
            border-radius: 5px;
        }

        .texts{
            width: 50%;
            margin: 10px;
            font-size: 15px;	
            overflow: hidden;
            
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            span{
                color: #2B87D9;
            }
        }

        button{
            height: 25px;
            margin-left: auto;

            align-self: center;

            background: radial-gradient(farthest-corner at 303px 45px, #1A9FFF 0%, #00BBFF 80%);
            border-radius: 4.63636px;
            border: none;

            color: #E9E9E9;
            font-size: 15px;
        }

    }

    .footer{
        margin: 18px 0 80px 10px;

        display: flex;
        flex-direction: column;

        p{
            font-size: 20px;
            span{
                color: #2B87D9;
            }
        }

        button{
            width: 303px;
            height: 45px;
            margin: 10px auto;

            background: radial-gradient(farthest-corner at 303px 45px, #1A9FFF 0%, #00BBFF 80%);
            border-radius: 4.63636px;
            border: none;

            color: #E9E9E9;
            font-size: 20.976px;
            line-height: 26px;
        }
    }
`

export default Container