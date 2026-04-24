import React, { useState, useEffect } from 'react';

const FlashSale = () => {
    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        // Nếu về 0 thì dừng, không tạo thêm bộ đếm nữa
        if (seconds <= 0) return;

        // Thiết lập bộ đếm 1 giây
        const timer = setInterval(() => {
            setSeconds(prev => prev - 1);
        }, 1000);

        // Dọn dẹp bộ đếm cũ trước khi bắt đầu bộ đếm mới
        return () => clearInterval(timer);
    }, [seconds]);

    return (
        <div>
            <h1>Flash Sale</h1>
            <h3>
                {seconds > 0 ? `Còn lại: ${seconds} giây` : "Hết giờ!"}
            </h3>

            {seconds === 0 && <button onClick={() => setSeconds(10)}>Chạy lại</button>}
        </div>
    );
};

export default FlashSale;