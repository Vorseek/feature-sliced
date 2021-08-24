import { Button } from 'antd';
import { fetchRickAndMortyCharter } from 'entities/CharterRickAndMorty/model';

const ButtonCharter = () => (
    <Button
      type="primary"
      onClick={() => {
        fetchRickAndMortyCharter();
      }}>
      Получить и отрисовать карточки персонажей
    </Button>
  );

export default ButtonCharter;
