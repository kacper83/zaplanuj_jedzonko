import React from "react";
import "../../scss/components/_newRecipe.scss"



export default class NewRecipe extends React.Component{
    constructor(props){
        super(props);

    }
    render() {


        return(
            <div className="newRecipe">
                <section className="newRecipe_header">
                    <h2>
                        Nowy przepis
                    </h2>
                    <button>
                        Zapisz i zamknij
                    </button>
                </section>

                <section className="newRecipe_Description">
                    <div className="title">
                        <h2>Nazwa przepisu</h2>

                        <div className="title_content">
                            Tutaj tytuł przepisu
                        </div>
                    </div>
                    <div className="description">
                        <div className="description_title">
                            <h2>Opis przepisu</h2>
                        </div>
                        <div className="description_content">
                            Tutaj szerszy opis przepisu <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Alias architecto at aut, delectus dolor ducimus earum facere natus rem sit.
                        </div>
                    </div>
                </section>
                <section className="guidance_and_ingredients">
                    <div className="guidance">
                        <h2>instrukcje</h2>
                        <div className="guidance_short">
                            Po tym czasie zalej kartofelki Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque commodi consect
                        </div>
                        <i className="far fa-plus-square add_guidance"></i>

                        <div className="guidance_long">
                            <ol>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, quisquam.</li>
                                <li>Accusantium corporis magni nisi nobis optio quae, quia repudiandae temporibus?</li>
                                <li>Atque aut odit provident quos repudiandae rerum saepe suscipit tenetur!</li>
                                <li>Assumenda commodi cumque dolores explicabo iste itaque nemo sint, veniam.</li>
                                <li>Ad alias dolorem exercitationem fugiat illo ipsum mollitia possimus sint!</li>
                                <li>Architecto atque debitis fuga magni minima necessitatibus quasi, quia rem.</li>
                                <li>At commodi consequuntur distinctio labore. Aperiam eius excepturi pariatur sapiente.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, quisquam.</li>
                                <li>Accusantium corporis magni nisi nobis optio quae, quia repudiandae temporibus?</li>
                                <li>Atque aut odit provident quos repudiandae rerum saepe suscipit tenetur!</li>
                            </ol>
                        </div>
                    </div>
                    <div className="ingredients">
                        <h2>składniki</h2>
                        <div className="ingredients_short">
                            Ser, słoninka, bakłażan itp
                        </div>
                        <i className="far fa-plus-square add_ingredients"></i>
                        <div className="ingredients_long">
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                <li>Blanditiis eum iure modi, nihil nobis sint!</li>
                                <li>Asperiores minima omnis quidem sunt velit. Hic?</li>
                                <li>Ad cumque dolor provident quas! Consequuntur, sunt.</li>
                                <li>Ab deleniti est facilis, harum impedit sed!</li>
                                <li>Accusamus at itaque non, perferendis repellat temporibus.</li>
                                <li>Fuga hic inventore, nam necessitatibus obcaecati similique.</li>
                                <li>Debitis ea eum, id porro sapiente temporibus.</li>
                                <li>Autem dolorem nemo quae quis sunt, velit!</li>
                                <li>Aut eius, ipsam laboriosam mollitia obcaecati velit.</li>
                                <li>Ab facilis ipsum quisquam rem sed sequi.</li>
                                <li>Eum fugit incidunt natus nobis quasi. Laudantium?</li>
                                <li>Esse maiores officiis sit vel veniam voluptate?</li>
                                <li>Aliquid distinctio expedita id qui sit suscipit?</li>
                                <li>Assumenda fugit iste mollitia officia quis repudiandae.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}