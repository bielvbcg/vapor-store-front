import styled from "styled-components";

const Container = styled.main`
    .topContainer{
        display: flex;
        flex-direction: column;

        h1{
            margin: 100px auto 0 auto;

            font-family: 'Saira Stencil One', cursive;
            font-size: 32px;
            line-height: 50px;
            color: #FFFFFF;
        }

        .products{
            height: 150px;
            margin: 20px 10px;

            font-size: 20px;
            text-align: center;
            align-self: center;

            overflow: hidden;
            overflow-y: scroll;

            p{
                margin-bottom: 5px;
            }
        }
    }

    form{
        margin-bottom: 100px;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;

        input{
                width: 303px;
                height: 45px;

                padding: 8px 6px;
                border-radius: 5px;

                font-size: 17px;
                line-height: 23px;
                color: #FFFFFF;

                background: #32353C;
                border: 1px solid #26282D;
        }

        button{
            width: 303px;
            height: 45px;
            background: radial-gradient(farthest-corner at 303px 45px, #1A9FFF 0%, #00BBFF 80%);
            border-radius: 4.63636px;
            border: none;
            margin-top: 20px;
            margin-bottom: 80px;

            color: #E9E9E9;
            font-size: 20.976px;
            line-height: 26px;
        }
    }
`

export default Container