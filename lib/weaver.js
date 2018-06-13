let DATABASE = {};

function Weaver()
{
    html = document.body;
    let j = new Scribe(DATABASE.daily).parse();
    let view = ``;
    
    view += doHeader();
    view += `<div class="content">${doJournal(j)}</div>`;
    view += doFooter();

    html.innerHTML = view;

    function doJournal(log)
    {
        let posts = ``
        for(i in log)
        {
            if(log[i].term != "")
                posts += `
                <div class="entry round">
                    <a href="" class="project">${log[i].term}</a>
                    <a href="" class="date">${log[i].date}</a>
                    <div class="note">${log[i].note}</div>
                    ${log[i].pict != "" ? `<div class="pict round" style="background-image: url('content/images/${log[i].pict}.jpg');"></div>` : ``}
                </div>`;
        }
        return posts;
    }

    function doHeader()
    {
        return `<div class="header"></div>`;
    }

    function doFooter()
    {
        return `<div class="footer"></div>`;
    }
}