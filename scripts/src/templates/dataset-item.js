export default (data) => {

// do score calculation here!
let score = Math.ceil((data.upratings / data.ratings) * 100);

return `
<dataset>
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
                    <div class="col-xs-4">
                        <div class="score">
                            <h3>${data.difficulty || 'N/A'}</h3>
                        </div>
                    </div>
                    <div class="col-xs-8">
                        <div class="description">
                            <p>${data.notes || ''}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</dataset>`
}
