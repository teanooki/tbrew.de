import beerData from './beers.json' with { type: 'json' };

function createBeerBlock(beer) {
    let html = `
            <div class="row justify-content-md-center beer-profile">
                <div class="col-md-3 beer-image order-1">
                </div>
                <div class="col-md-6 order-3 order-md-2">
                    <h1>${beer.title}</h1>
                    <h2>${beer.style}</h2>
                    <p>${beer.description}</p>
                </div>
                <div class="col-md-3 order-3 order-md-2">
                    <div class="beer-stats-list">
                        <div class="beer-stats">
                            <div class="beer-key">ABV</div>
                            <div class="beer-val">${beer.stats.abv}%</div>
                        </div>
                        <div class="beer-stats">
                            <div class="beer-key">IBU</div>
                            <div class="beer-val">${beer.stats.ibu}</div>
                        </div>
                        <div class="beer-stats">
                            <div class="beer-key">OG</div>
                            <div class="beer-val">${beer.stats.og}°P</div>
                        </div>
                        <div class="beer-stats clearfix">
                            <div class="beer-key">Hops</div>
                            <div class="beer-val">${beer.ingredients.hops.join(", ")}</div>
                        </div>
                        <div class="beer-stats">
                            <div class="beer-key">Malts</div>
                            <div class="beer-val">${beer.ingredients.malts.join(", ")}</div>
                        </div>
                        <div class="beer-stats">
                            <div class="beer-key">Yeast</div>
                            <div class="beer-val">${beer.ingredients.yeast.join(", ")}</div>
                        </div>
                        <div class="beer-stats">
                            <div class="beer-key">Check In</div>
                            <div class="beer-val"><a href="${beer.untappd}">Untappd</a></div>
                        </div>
                    </div>
                </div>
            </div>
    `
    let el = document.createElement("div");
    el.innerHTML = html;

    return el.getElementsByTagName("div")[0];
}

//console.log("beer", beer_data);
//console.log('beer block', createBeerBlock(beerData[0]));
let beerView = document.getElementById("view-beers").getElementsByTagName("div")[0];
beerData.forEach(beer => {
    beerView.appendChild(createBeerBlock(beer))
});

//console.log(e);
//e.appendChild(createBeerBlock(beer_data[1]))