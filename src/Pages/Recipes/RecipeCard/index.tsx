import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Card, { CardProps } from '../../../Components/Card';

export interface RecipeCardProps extends CardProps {}

const RecipeCard: FC<RecipeCardProps> = ({ className, ...props }) => {
  return (
    <Link to={`/recipe/${123}`}>
      <Card {...props}>
        <Card.Image src="https://via.placeholder.com/300x200" />
        <Card.Content className="mt-2">
          <div className="font-bold text-lg">White Castle Sliders</div>
          <div className="text-sm h-16 text-gray-500">
            A macro friendly version of White Castle sliders
          </div>
          <div className="font-sm">100 Calories | 2g Protien</div>
        </Card.Content>
      </Card>
    </Link>
  );
};

export default RecipeCard;
