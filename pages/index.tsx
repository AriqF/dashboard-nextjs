import type { NextPage } from 'next'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Container, Row } from 'react-bootstrap';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [100, 200, 300, 210, 110, 220, 500],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [400, 300, 220, 221, 872, 233, 552],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Home: NextPage = () => {
  return (   
    <div className='container-fluid'>
      <div className="row">
        <Sidebar/>
          <main className="col-md-9 ms-sm-auto col-lg-10  d-flex">
            <div className="row" style={{height: '50rem'}}>

              <div className="col-xl-6">
                
                <div className="row">
                  <div className="col-xl-6">
                    <div className="card card-balance shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Saldo Kas</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">IDR 20.000.000</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-wallet fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="card card-balance shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Saldo Kas</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">IDR 20.000.000</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-wallet fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>


              </div>
              <div className="col-xl-6">

                <div className="row">
                  <div className="col-xl-6">
                    <div className="card card-balance shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Saldo Kas</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">IDR 20.000.000</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-wallet fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="card card-balance shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Saldo Kas</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">IDR 20.000.000</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-wallet fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>


              </div>
              <div className="col-xl-12">
                <Bar options={options} data={data} height={100}/>
              </div>
            </div>
          </main>
      </div>

    </div>

  )
}

export default Home
