import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const menuItems = [
  {
    id: 1,
    name: 'Паста Карбонара',
    description: 'Классическая итальянская паста с беконом и сливочным соусом',
    price: 450,
    image: 'https://cdn.poehali.dev/projects/52640c68-7548-4250-97bd-b69ef327192f/files/33b03128-4951-4fcc-89f1-e3c3a0e4f863.jpg',
    category: 'Основные блюда'
  },
  {
    id: 2,
    name: 'Цезарь с курицей',
    description: 'Свежий салат с куриной грудкой, пармезаном и сухариками',
    price: 380,
    image: 'https://cdn.poehali.dev/projects/52640c68-7548-4250-97bd-b69ef327192f/files/feb6abd3-5dc6-4155-9fee-7c0008b10501.jpg',
    category: 'Салаты'
  },
  {
    id: 3,
    name: 'Пицца Маргарита',
    description: 'Классическая пицца с моцареллой, томатным соусом и базиликом',
    price: 520,
    image: 'https://cdn.poehali.dev/projects/52640c68-7548-4250-97bd-b69ef327192f/files/319ade7f-1c33-4ddc-b450-6af13e2a43f6.jpg',
    category: 'Пицца'
  }
];

const reviews = [
  {
    name: 'Анна К.',
    rating: 5,
    text: 'Быстрая доставка и вкуснейшая еда! Заказываю уже третий раз.'
  },
  {
    name: 'Дмитрий М.',
    rating: 5,
    text: 'Отличное качество блюд, всё свежее и горячее. Рекомендую!'
  }
];

export default function Index() {
  const [address, setAddress] = useState('');
  const [deliveryCost, setDeliveryCost] = useState<number | null>(null);

  const calculateDelivery = () => {
    if (!address.trim()) {
      return;
    }
    const basePrice = 150;
    const distance = Math.floor(Math.random() * 5) + 1;
    const cost = basePrice + distance * 30;
    setDeliveryCost(cost);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="UtensilsCrossed" size={28} className="text-primary" />
            <span className="text-2xl font-bold">FoodSperm</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#menu" className="text-sm font-medium hover:text-primary transition-colors">Меню</a>
            <a href="#delivery" className="text-sm font-medium hover:text-primary transition-colors">Доставка</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-secondary hover:bg-secondary/90">
            <Icon name="ShoppingCart" size={18} className="mr-2" />
            Корзина
          </Button>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                🎉 Скидка 20% на первый заказ
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Доставка еды<br />за 30 минут
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Свежие и вкусные блюда от лучших ресторанов города прямо к вашей двери
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8">
                  Смотреть меню
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-14 px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src={menuItems[0].image} 
                    alt="Еда" 
                    className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src={menuItems[1].image} 
                    alt="Еда" 
                    className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img 
                    src={menuItems[2].image} 
                    alt="Еда" 
                    className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src={menuItems[0].image} 
                    alt="Еда" 
                    className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <CardTitle>Быстрая доставка</CardTitle>
                <CardDescription>Доставим ваш заказ за 30 минут или бесплатно</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="ChefHat" size={24} className="text-primary" />
                </div>
                <CardTitle>Свежие продукты</CardTitle>
                <CardDescription>Используем только качественные ингредиенты</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <CardTitle>Безопасная оплата</CardTitle>
                <CardDescription>Принимаем карты и наличные при получении</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Популярное меню</h2>
            <p className="text-xl text-muted-foreground">Попробуйте наши фирменные блюда</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <Card key={item.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-secondary">{item.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{item.name}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">{item.price} ₽</span>
                    <Button className="bg-secondary hover:bg-secondary/90">
                      <Icon name="Plus" size={18} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Калькулятор доставки</h2>
            <p className="text-xl text-muted-foreground">Узнайте стоимость доставки по вашему адресу</p>
          </div>
          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Рассчитать стоимость</CardTitle>
              <CardDescription>Введите адрес доставки для расчёта</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  placeholder="Введите ваш адрес..." 
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="flex-1 h-12"
                />
                <Button 
                  onClick={calculateDelivery}
                  className="bg-primary hover:bg-primary/90 h-12 px-8"
                >
                  <Icon name="Calculator" size={18} className="mr-2" />
                  Рассчитать
                </Button>
              </div>
              
              {deliveryCost !== null && (
                <div className="bg-primary/5 rounded-lg p-6 animate-scale-in">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Стоимость доставки</p>
                      <p className="text-4xl font-bold text-primary">{deliveryCost} ₽</p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Bike" size={32} className="text-primary" />
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      <span>Примерное время доставки: 25-35 минут</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      <span>Адрес: {address}</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Бесплатная доставка</p>
                    <p className="text-sm text-muted-foreground">При заказе от 1000 ₽</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CreditCard" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Онлайн оплата</p>
                    <p className="text-sm text-muted-foreground">Картой или наличными</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary">Акции</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Специальные предложения</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-primary bg-primary/5">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">🎁</span>
                  <Badge className="bg-primary">Новинка</Badge>
                </div>
                <CardTitle className="text-2xl">Скидка 20% на первый заказ</CardTitle>
                <CardDescription className="text-base">
                  Оформите свой первый заказ и получите скидку 20% на всё меню
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 border-secondary bg-secondary/5">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">🍕</span>
                  <Badge className="bg-secondary">Популярное</Badge>
                </div>
                <CardTitle className="text-2xl">Комбо на двоих за 999 ₽</CardTitle>
                <CardDescription className="text-base">
                  Две пиццы, салат и напитки по выгодной цене
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={18} className="fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-base">"{review.text}"</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Мы всегда на связи</p>
          </div>
          <Card className="border-none shadow-xl">
            <CardContent className="pt-8">
              <div className="grid sm:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" size={28} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" size={28} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground">info@foodsperm.ru</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" size={28} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                  <p className="text-muted-foreground">Москва, ул. Примерная, 1</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 bg-foreground/5 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="UtensilsCrossed" size={24} className="text-primary" />
              <span className="text-xl font-bold">FoodSperm</span>
            </div>
            <p className="text-muted-foreground text-sm">© 2024 FoodSperm. Все права защищены.</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}