import React from 'react'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = () => {

    const heroesFiltered = heroes;

    // const [formValues, handleInputChange] = useForm({
    //     searchText: ''
        
    // });

    // const {searchText} = formValues; 

    const handleSearch = () => {
        console.log('?');
    }
    
    return (
        <div>
            <h1>Search </h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            placeholder="Find your services"
                            className="form-control"
                            name="searchText"
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4> Result </h4>
                    <hr/>
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
