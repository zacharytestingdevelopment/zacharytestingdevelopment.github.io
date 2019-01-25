var ctx = document.getElementById('dayChart').getContext('2d')
var dayChart = new Chart(ctx,
    {
        type: 'doughnut',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', "Thursday", "Friday", "Saturday", "Sunday"],
            datasets: [{
                backgroundColor: ["#E9463E", "#3ee986", "#3EE4E9", "#E93EB3", "#A83EE9", "#E9E63E"],
                data: [10, 25, 7, 13, 20, 20]
            }]
        }
    });

var ctx = document.getElementById('timeChart').getContext('2d')
var timeChart = new Chart(ctx,
    {
        options: {
            borderColor: '#4257b2'
        },
        responsive: true,
        maintainAspectRatio: true,
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', "May"],

            datasets: [{
                borderColor: '#4257b2',
                pointBorderColor: '#4257b2',
                pointBackgroundColor: '#4257b2',

                data: [40, 25, 15, 10, 50]
            }]
        }
    });
