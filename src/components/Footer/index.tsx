import './index.scss';

type FooterProps = {
    WebPageName: string;
  };

export default function Footer({ WebPageName }: FooterProps) {
    return (
        <div className='footer'>
            Copyrights © { new Date().getFullYear() }. All Rights Reserved { WebPageName }
        </div>
    );
}
