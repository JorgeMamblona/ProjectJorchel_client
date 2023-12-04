import './HomePage.css'


const HomePage = () => {

    return (

        <div className="Home-Page">
            <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>

            <dotlottie-player src="https://lottie.host/2a242602-5464-48f3-8755-bffe72cbde03/WJBwRAuGs7.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player>
        </div>

    )
}

export default HomePage