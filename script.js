let jobs = [
    //job-1
    {id: 1, company: "Mobile First Corp", title: "React Native Developer", location: "Remote", type: "Full-time", salary: "$130,000 - $175,000", description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status: "all"},

    //job-2
    {id: 2, company: "WebFlow Agency", title: "Web Designer & Developer", location: "Los Angeles, CA", type: "Part-time", salary: "$80,000 - $120,000", description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status: "all"},

    //job-3
    {id: 3, company: "DataViz Solutions", title: "Data Visualization Specialist", location: "Boston, MA", type: "Full-time", salary: "$125,000 - $165,000", description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", status: "all"},

    //job-4
    {id: 4, company: "CloudFirst Inc", title: "Backend Developer", location: "Seattle, WA", type: "Full-time", salary: "$140,000 - $190,000", description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", status: "all"},

    //job-5
    {id: 5, company: "Innovation Labs", title: "UI/UX Engineer", location: "Austin, TX", type: "Full-time", salary: "$110,000 - $150,000", description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", status: "all"},

    //job-6
    {id: 6, company: "MegaCorp Solutions", title: "JavaScript Developer", location: "New York, NY", type: "Full-time", salary: "$130,000 - $170,00", description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", status: "all"},

    //job-7
    {id: 7, company: "StartupXYZ", title: "Full Stack Engineer", location: "Remote", type: "Full-time", salary: "$120,000 - $160,000", description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.", status: "all"},

    //job-8
    {id: 8, company: "TechCorp Industries", title: "Senior Frontend Developer", location: "San Francisco, CA", type: "Full-time", salary: "$130,000 - $175,000", description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.", status: "all"}
];

let activeFilter = 'all';

function render() {
    const grid = document.getElementById('job-grid');
    const emptyState = document.getElementById('empty-state');
    const template = document.getElementById('job-card-template');

    const filteredJobs = jobs.filter(function(jon){
        if (activeFilter == 'all') {
            return true;
        } else {
            return job.status == activeFilter;
        }
    });


    document.getElementById('stat-total').innerText = jobs.length;
    document.getElementById('stat-interview').innerText = jobs.filter(j => j.status == 'interview').length;
    document.getElementById('stat-rejected').innerText = jobs.filter(j => j.status == 'rejected').length;
    document.getElementById('current-count').innerText = filteredJobs.length;

    grid.innerHTML = "";

    if (filteredJobs.length == 0) {
        emptyState.classList.remove('hidden');
        emptyState.classList.add('flex');
        return;
    }
    emptyState.classList.remove('flex');
    emptyState.classList.add('hidden');


    filteredJobs.forEach(function(job) {
        const card = template.contentEditable.cloneNode(true);

        card.querySelector('.company-name').innerText = job.company;
        card.querySelector('.job-title').innerText = job.title;
        card.querySelector('.location').innerText = job.location;
        card.querySelector('.job-type').innerText = job.type;
        card.querySelector('.salary').innerText = job.salary;
        card.querySelector('.description').innerText = job.description;

        const intBtn = card.querySelector('.interview-btn');
        const rejBtn = card.querySelector('.rejected-btn');
        const deleteBtn = card.querySelector('.delete-btn');

        if (job.status == 'interview') {
            intBtn.classList.remove('btn-outline');
        } else if (job.status == 'rejected') {
            rejBtn.classList.remove('btn-outline');
        }

        intBtn.onclick = function () {updateStatus(job.id,'interview'); };
        rejBtn.onclick = function () {updateStatus(job.id,'rejected'); };
        deleteBtn.onclick = function () {removeJob(job.id); };

        grid.appendChild(card);
    });
}


function setFilter(filterName) {
    activeFilter = filterName;

    const allTabs = document.querySelectorAll('.tab');
    allTabs.forEach(t => t.classList.remove('tab-active'));

    document.getElementById(`tab-${filterName}`).classList.add('tab-active');

    render();
}