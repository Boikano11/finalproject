form.addEventListener('submit', (e) => {
    e.preventDefault()
    const userEmail = document.getElementById('email').value
    document.getElementById('main').innerHTML = `
        <div class="success-message">
            <section class="card">
                <header class="card-header">
                    <span class="success-icon">
                        <img src="assets/images/icon-success.svg" alt="success-icon">
                    </span>
                </header>
                <main class="card-body">
                    <h1>Thanks for subscribing!</h1>
                    <p>A confirmation email has been sent to ${userEmail}. Please open it and click the button inside to confirm your subscription.</p>
                    <button id="success-btn" class="btn" type="button">Dismiss message</button>            
                </main>
                <footer class="card-footer">
                    <div class="attribution">
                        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                        Coded by <a href="#">Tsholofetso Pooe</a>.
                    </div>
                </footer>
            </section>
        </div>
    `

    document.getElementById('success-btn').addEventListener('click', () => {
        document.getElementById('main').innerHTML = `
            <section class="newsletter">   
                <form id="form" class="newsletter-form" action="" method="POST">
                    <h1>Stay updated!</h1>

                    <p>Join 60,000+ product managers receiving monthly updates on:</p>

                    <ul>
                        <li>Product discovery and building what matters</li>
                        <li>Measuring to ensure updates are a success</li>
                        <li>And much more!</li>
                    </ul>

                    <label for="email">Email address</label>
                    <input type="email" name="email" id="email" placeholder="email@company.com" required>

                    <button class="btn" type="submit">Subscribe to monthly newsletter</button>
                </form> 
            </section>
            <section class="newsletter-img">
                <img class="desktop-img" src="assets/images/illustration-sign-up-desktop.svg" alt="">
            </section>
        `
    })
})
