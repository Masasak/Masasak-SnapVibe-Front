'use client';

import Image from 'next/image';

import React, { useRef } from 'react';

import * as S from './index.css';

const MyPageUserInfo = () => {
  const fileInput = useRef<HTMLInputElement>(null);

  const handleCoverImg = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className={S.MyPageUserBox}>
      <div className={S.CoverImgWrapper}>
        <Image
          src="https://i.pinimg.com/originals/3d/04/83/3d0483a943e61b82fb4740601bbebd8c.jpg"
          alt=""
          fill
          unoptimized
        />
        <label className={S.ChangeCoverButton} htmlFor="file">
          커버변경
        </label>
        <input
          type="file"
          id="file"
          ref={fileInput}
          onChange={e => handleCoverImg(e)}
          style={{ display: 'none' }}
        />
      </div>
      <div className={S.UserInfoWrapper}>
        <div className={S.ProfileImgWrapper}>
          <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABHVBMVEX///8IadAHWKcGa9APZ8cAaNL//v/1/v7///37//9Vkc7//v7///sJWKP///f///p7ptMAZMoAUqAJV6jy//8HWqP/+//7//wAUJj//Pj///IAWawGadb8//gIa8rX5vMAS5sAVZYATJLp+/8AVJoAU6MAVq0+eqwAT6UAXK9+nsmHs90AX8EAYtcAY8De9PbS7fbF3uyautJolLkaYZ8zb6eIq79DdJ9wm8Gqyt0dX5ZvmrfK6fNgkLyPttKApsQAU5I8b6suaZlokr5Vg7CnyOOmwtOpwtJ/psq41edKeqUsa6qZxN0ASahJfbrC5/DP3u+eweg0fcgcb8Vjn9Qjbrp4qeIQaL5ekcet1+pHi8MAXcpum9iAtdtVldlWvEboAAALo0lEQVR4nO2dCVfbRheGZdkazUQjCWuxLEu2Y8sYKOAN0wSaAkmA4DbtV7aalLb//2d8d2RIWRwcjGyNz5knOSHhQNDre+cus1mSBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCTqCUYgmXqYYKmmFSPIL6PkaIEAlLEtY0DF+zsHge6EAFpFHTc6J2u1NltKNIBW3UMDHBCEQusEIptpMkRd3e1na/Xq+/Zli17a1eV5WYPSXCSPsxpwf7GpKc7o9vGqurth0EgRyj68Wiu/12p0MI0nxfS/sxXwDGamf/jfXacmuuLNu2rQNMoRwEzWZx96d3DvFNf9G8NHY+AEzjdH/atZqyDr+YrltGf5Vlt9Hf6jo337ZAlqSm6WGiaj7p/txouEyPfA975KnxnzXQqGIIrNoCWRIGFxtdONrrF3UXkJ+ksbvfhni6SOHGI6hglrxPK5atuyBRf1JgsCZbH3YcShdIYRnynNc+ObDACZkJn1Q4ijy1/cg3FsdLkWmQzpUVP7o7yUv1kZEbW9FiRJr4KTWNdN6v2hA/g9ugOcGK8CXFwwhTmvbzTwRDfpc0g3Q/FO2nZT0UKev1w4iYFKG0NUwCQSEtgcDn6IsV2kwiXoCxqIEZO5Dkg2cqtANbtj46C9BmwBiMDotrgT1h8D2yIWDX34LEtBVMAFPk/FiPA+SzjMjCDcTU+h7x05bwNAiVyFFDlyfGz7Ei3WBDH0Cxhwi/DSMqeO/606gbYTflDx3J1zhW6PvRSnFClfaEPnDU4pbqU8JvyjCNo+JzR+AdhW5DDmpdrocijQ6XpzUhG4jLTbn4c8SriyJEJLVXl135WeXMHVy9CY5a6xGNSy+FlpCQzm5j7Xm5/rEhl99HPp+9IjS90qDBpiamdtOYZnHHxFwqlLCvvoWWcFLHOwG7aW05Jo9DkRLsd/o2K2deZEIoUPvveGyjsKESvPeaFTPTBpobdNn6jHnshsGG6gqbN3yhQmgzlg8Jj15KMO4eNF9mvpHCINhtp61mHMSUesUXZoqRRDk4OE5bzTiIoW49s7P/psLiTzxmC1JyVpaTUCjrtrWipi1nDMRo99delutvseV+O148TVvTfQjt1l6YJ/6TqP+BKYGRzRUYSrYkAk2s0PokQW3KWdrH0nExSMZLZdk65lJhz0pOYY/4mLe0j6W95eQU7qv89RdU2rOTVOjzqDBRG/K3IpzsOGReyls+TDaW9iRfwrwpxDuJ5UM5zoe8LWFATZOcQr2LOVRotvsJtIdsSlGvudW05YyB+NF2EnUpWyttvI/SljMGQtUtPaHSu7HFWy5kQBXZqycwEAPZDeq9tNWMA2J7tZ+AwqbsNovdtNWMg1CqriTgpbbuBr/yuThDDXLy+ju2z0zAdWXrLZfzpRI28aDxcoVAbcDljgxEKG5/SEBhIP8ScaqQ+GTferFCXS72sMRjtgCFJu26CYzDXzucrh/Gm7o/rtZsefplbmDN2iNcxpkbqr/a09swNr+9zWPF9pUC+fxbzZ0278evTf1Y0iQu1/FjkBH9XnOnzftsx23x0PEx4XcPJvHMbmPqcajLemO34xmEaNyOREKM8tJrtvd5mnVSaE0Ojh02n8/vri8JUYNtGqq58hSDUQ+styq31huBJVQgnQ+NZnMaV10rvokQ7woxKvjkfwfNjWCaHRm7VcTfNOl9MIRBk6rHdft5e4RHHOxIJmezT4/QNEL9QkHt7T5/HC5bPdU3uJvLfwDWCDgqQupxA0ai+z3lDQu7Td1dk/s9lbtJ4G9BDIMMtpfZdsrvkMiO1dhN60OXx7X7b0DKJYNU/7KC4DuMuMwkNldX3nmlBTGgFJ/9pQhF+7Xlyccu9L67FjRr+5FEOc8Td2E7TZFmksEba2Jlo9dcvfF+x8E+v7XoY0zDUz2PmF60V7PkwL53htRmyHZ8TIaVok3r4Mc2QZjyuB/xO2jv95eb9tfzv+4I/fZMHgzD4laV8LZi//1o2COdvW2rGazdnNNjezPBhA1dDtbcWqPeX+qotFBYIAd9CDYNGg1O3tSLMCQDdh4/ltkMbMtadT9+anvUMBbpfOwjoJ0qGaamdvcP+8W6ZVnL8FteXn198Mv+oO1Ims/ux/AWWCK79cKjPnih2u5+6vX2Tn4ATno7HYdQyA9Io1ADLbSXavG9F0jT/DhU/mcs1oYgUM+OjS6yQoFAIBAIBIJFBBp1TEcXlMWXRaGHkIfEn6WmSSlmXRT3NTgopCbW4ov1WE0NvdEYTO0BEru2TWKdVImzQxaPQOziCEw8dptgPHM61oZe+SveCNMsmybY3TR4V8imIxCzniTRrxfq3eWRG8bWZt+loQLA+3wUjns+k6rRH4Oj09P19fWlh6w/4BQ4OjoaDKpth3hemcv5qJu5+JE1SFT9sv7qrJLL5fJjydz7lzL6kKucn5+9Wjqq3mxTgI6SI2Midm0OYmOIetWji7MKe3BFycRkH5AZT/z5fH6jcn4B7b9EPQ0cNvZqLqbhCJuQMEzS/nJx2cpnc9+SMYn4BVDyl0uDqExVzzD4WahhF5E63ZOzlhKGYbbyAoWgUcnkWmd/DpySwWaJuVhtw76vOt2L4QboA9/MVqYUeOvRGfh/NnNXXYII5eP0EybOl1fMfEolFjetCUcKlRBeo0om3Ny4GjhQGKWmMM5bCJkekdTux7X8yHoV+DC1wHtRKRMq2dZVF7FtiuCqKehEBYjoCLNp+x/AP1+g69uE4fAkktjPwKlUOqzwxIjsXOZzLDrMQGEuF4ZnA6IRYhgpCCTUoAi1L65DCA3KNxPdS2CDMte6aOMSTWEFHNoGSkjn3+tMJXOTyWYgsdLKKcqrqkmcyU80A4Ua6Z7lw8xw+ESt8jKBOZYdw/xZl8zXSwkrj6FKI0fnEGGU7CyG4I1EKP6yOSU8PyJmSSvQOcUb7HkU03JJXW8pM9N2B5aCWutO2UDz2rGIyxgVDENdym/OSSGkDWUpKhnzWqLCZaj7vehv5aaEmTWhkqtUKq2lqFwozEchS4QkWtpQoISZSYB5DPykysZSNK/+HyHDcJZalWE2nJOXKqxhUVp7xMBkHg0V0kreaWtO1rtFUYaZ/JHhsZ1Fs5dIS4OcMrsUMZZwMxtuDgcE+uzZGxGb3cv8fBz0P5RRkfoO6jdv9hI758owDOerMHsOwSaT+yuS5tBIOX9db1bm7KQQTaG/VpSNdWLOVCExPOqdQjE8k3bwaYnQESu5cOOItcNkZseGNOhGd4bzFndHZiZz9o694xCaVWr0CY7O8ukphC4tc6Ga5uyOmPoqWZp3jLlHLhO2PhPsm7OKN2WvO5xzmrhHlvVqlx2CZ6bQUy+UuYfRO4AJcznlxEFm8hF1tFBmDHLxhGGqKOd/EN+YhQ0xxupVHkrgdAVmMvkr1ZxBLCVs8jDdUXhLeN7xZnAYmlBTU//MscSbukJlXZ3BIT5ozNT2ea4CrVrKArOVTKVqJD6BCk6q4c95NkebtkIlU7k+TX5nODippP2bZrL/ihIOr393kp+yMU2pOuRCYQaGymU78XGITSyd5rlQCOMwbB0lLVDSCFF/50IgaxUrymXiV0tAhq2e85AMWXG6OQyvB1hCiXYYyC+dptk23SGbBT/NnxoeKnlJKjRKf8+/sR8PW+rK/+l5hVKSKQP50RlPCjOvHFwwkgyoiL7LZ+ayTDGZeCfDZZsWvCR3hmn0y6bCk8JW1y8kesmLhv+5zqTfOMXECjf+wQUvyRZKI//mFE4UxuT/JpqX5IyURs4rXCnMniWsEDlDvmyYHarJKpSiFl82zAwjnKzCdivLl8JWJCWqEHfyIDB8uOM3PTLDNqZJvi2UEbWyw1w2xw1Kq0MTdVLcaYVZJVS4IVyLkn2faxxdveKLqyjZI0SaVlAd6IK5wVELBZKkmxJUYOd1MDeYvoYSVSgQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCAQf8H9KLUnikPYkMAAAAAElFTkSuQmCC"
            alt=""
            fill
          />
        </div>
        <div className={S.ContentWrap}>
          <p className={S.UserId}>dongwook1230</p>
          <div className={S.ButtonWrapper}>
            <div className={S.FollowshipButtonWrapper}>
              <button className={S.FollowerButton}>팔로워 1,000</button>
              <button className={S.FollowingButton}>팔로잉 100</button>
            </div>
            <div>
              <button className={S.HandleInfoButton}>정보 수정</button>
              <span className={S.HandleInfoButton}>
                &nbsp;&nbsp;|&nbsp;&nbsp;
              </span>
              <button className={S.HandleInfoButton}>로그아웃</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageUserInfo;
