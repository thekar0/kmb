fetch('assets/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
        let founding_year = 2025;
        let current_year = new Date().getFullYear();

        if (founding_year != current_year)
        {
            document.getElementById("current_year").textContent = `${founding_year} - ${new Date().getFullYear()}`
        }
        else
        {
            document.getElementById("current_year").textContent = `${founding_year}`
        }
    });
