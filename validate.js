// Form submission handling
        const enquiryForm = document.getElementById('enquiryForm');
        const enquirySuccess = document.getElementById('enquirySuccess');

        enquiryForm.addEventListener('submit', function(e) ){
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('enquiryEmail').value.trim();
            const phone = document.getElementById('enquiryPhone').value.trim();
            const service = document.getElementById('service').value;
            const budget = document.getElementById('enquiryBudget').value;
            
            if (!name || !email || !phone || !service || !budget) {
                alert('Please fill in all required fields.');
                return;
            }
        }
