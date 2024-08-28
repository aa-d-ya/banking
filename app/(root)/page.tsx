import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {

    const loggedIn ={firstName:'Aadya', lastName:'Singh', email:'contat@mail.com'};

  return (
   <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transactions efficiently."
                />
                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={5500}
                />
            </header>
            RECENT TRANS
        </div>

        <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 5500 },{currentBalance: 5000}]}
      />
   </section>
  )
}

export default Home