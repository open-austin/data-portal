export default (data) => (
`<dataset>

<div class="row">
    <div class="col-xs-12">
        <div class="exampletile">
            <div class="row">
                <div class="col-xs-12">
                    <h3><a href="${data.url}">${data.title}</a></h3>
                </div>
            </div>
            <div class="exampledataset">
                <div class="row">
                    <div class="col-xs-5">
                        <div class="score">
                            <h1>${data.score || 'N/A'}</h1>
                        </div>
                        <div class="ratings">
                            <p class = "whitetext"><span>${data.ratings || '0'}</span> ratings</p>
                        </div>
                        <div class="projects">
                            <p class = "whitetext"><span>3</span> projects</p>
                        </div>
                    </div>
                    <div class="col-xs-7">
                        <div class="description">
                            <p>${data.notes || ''}</p>
                        </div>
                        <div class="format">
                            <h2><i class="fa fa-file-pdf-o" aria-hidden="true"></i><i class="fa fa-file-excel-o" aria-hidden="true"></i></h2></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</dataset>`
)
