import { useParams } from 'react-router-dom';
import Word, { Iword } from './Word';
import useFetch from '../hooks/useFetch';
import React from 'react';

export default function Day() {
	const { day } = useParams<{ day: string }>();
	const words: Iword[] = useFetch(`http://localhost:3001/words?day=${day}`);

	return (
		<>
			<h2>Day {day} </h2>
			{words.length === 0 && <span>Loadings ...</span>}
			<table>
				<tbody>
					{words.map((word) => (
						<Word word={word} key={word.id} />
					))}
				</tbody>
			</table>
		</>
	);
}
