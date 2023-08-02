import { useContext } from 'react';
import UserInfoTop from './UserInfoTop';
import UserInfo from './UserInfo';
import { UserInfoContext } from '@/contexts/UserInfoContext';

const SearchResult = () => {
  const { userData, setUserData } = useContext(UserInfoContext);

  const feed = [
    {
      publicProfile: true,
      stepByStep: true,
      player_id: '990378929156885',
      nickname: '이민정',
      market: '',
      version: '4.4.1',
      stage: 4008,
      star: 24,
      db_shard_id: 0,
      public_profile: true,
      asset: {
        decoMarble: {
          free: 20,
          paid: 0
        },
        con: {
          free: 0,
          paid: 0
        },
        gem: {
          free: 999059,
          paid: 0
        },
        material: {
          free: 7,
          paid: 0
        },
        super_material: {
          free: 20,
          paid: 0
        },
        marble: {
          free: 1411,
          paid: 0
        },
        token: {
          reset: false,
          free: 5,
          paid: 0,
          max_token: 5,
          last_gather_time: '2023-07-28T08:11:30Z',
          expire_max_token_time: '2023-06-15T16:54:37'
        }
      },
      current_world_id: 1002,
      creation_dtm: '2023-06-15T16:54:24',
      last_activity_dtm: '2023-07-28T16:20:22',
      last_version_update_dtm: '2023-07-28T15:49:00',
      step_by_step: true,
      friends_count: 25,
      game_friends_count: 0,
      today_visit_count: 0,
      today_visit_list: [],
      total_visit_count: 0,
      visit_reward: null,
      can_complete_quests: {
        '1002': {
          quests: {
            '25': [
              {
                id: 'tuberesort_210',
                text: {
                  id: 'quest_tr2_10_q_task',
                  kr: '뒷편에 정원 만들기 (2)',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_212',
                text: {
                  id: 'quest_tr2_12_q_task',
                  kr: '야외에 테이블 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_211',
                text: {
                  id: 'quest_tr2_11_q_task',
                  kr: '야외 조명 달기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_217',
                text: {
                  id: 'quest_tr2_17_q_task',
                  kr: '안전을 위한 난간 설치',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_216',
                text: {
                  id: 'quest_tr2_16_q_task',
                  kr: '알록달록 파라솔',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_215',
                text: {
                  id: 'quest_tr2_15_q_task',
                  kr: '시원한 음료 서빙',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_202',
                text: {
                  id: 'quest_tr2_02_q_task',
                  kr: '루프탑 수영장 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_201',
                text: {
                  id: 'quest_tr2_01_q_task',
                  kr: '나무 바닥 깔기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_207',
                text: {
                  id: 'quest_tr2_07_q_task',
                  kr: '달콤한 음료 테이블',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_206',
                text: {
                  id: 'quest_tr2_06_q_task',
                  kr: '일광욕 자리 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_205',
                text: {
                  id: 'quest_tr2_05_q_task',
                  kr: '수영장에 사다리 두기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_209',
                text: {
                  id: 'quest_tr2_09_q_task',
                  kr: '뒷편에 정원 만들기 (1)',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_208',
                text: {
                  id: 'quest_tr2_08_q_task',
                  kr: '따가운 햇빛 가리기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_121',
                text: {
                  id: 'quest_tr1_21_q_task',
                  kr: '출입문 달기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_120',
                text: {
                  id: 'quest_tr1_20_q_task',
                  kr: '객실 출입구 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_111',
                text: {
                  id: 'quest_tr1_11_q_task',
                  kr: '테라스 지붕 덮기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_110',
                text: {
                  id: 'quest_tr1_10_q_task',
                  kr: '구역 구분하기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_113',
                text: {
                  id: 'quest_tr1_13_q_task',
                  kr: '테라스 꾸미기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_112',
                text: {
                  id: 'quest_tr1_12_q_task',
                  kr: '테라스 창문 꾸미기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_119',
                text: {
                  id: 'quest_tr1_19_q_task',
                  kr: '접대용 테이블 두기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_118',
                text: {
                  id: 'quest_tr1_18_q_task',
                  kr: '풀에 물 채우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_117',
                text: {
                  id: 'quest_tr1_17_q_task',
                  kr: '개인용 풀 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_116',
                text: {
                  id: 'quest_tr1_16_q_task',
                  kr: '바닥에 타일 깔기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_104',
                text: {
                  id: 'quest_tr1_04_q_task',
                  kr: '손님 맞을 준비하기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_103',
                text: {
                  id: 'quest_tr1_03_q_task',
                  kr: '깨끗하고 포근한 침대',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_108',
                text: {
                  id: 'quest_tr1_08_q_task',
                  kr: '초록빛 플랜테리어',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_107',
                text: {
                  id: 'quest_tr1_07_q_task',
                  kr: '따가운 햇빛 가리기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_106',
                text: {
                  id: 'quest_tr1_06_q_task',
                  kr: '시원한 액자 걸기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_105',
                text: {
                  id: 'quest_tr1_05_q_task',
                  kr: '내부에 가구 두기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_109',
                text: {
                  id: 'quest_tr1_09_q_task',
                  kr: '폭신한 카펫 깔기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_420',
                text: {
                  id: 'quest_tr4_20_q_task',
                  kr: '해변에 펜스 설치하기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_511',
                text: {
                  id: 'quest_tr5_11_q_task',
                  kr: '부둣가에 튜브 설치',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_510',
                text: {
                  id: 'quest_tr5_10_q_task',
                  kr: '부둣가에 튜브 설치',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_515',
                text: {
                  id: 'quest_tr5_15_q_task',
                  kr: '탑승장 가는 길',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_514',
                text: {
                  id: 'quest_tr5_14_q_task',
                  kr: '모터보트 띄우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_513',
                text: {
                  id: 'quest_tr5_13_q_task',
                  kr: '의자 위 파라솔 달기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_512',
                text: {
                  id: 'quest_tr5_12_q_task',
                  kr: '감시용 의자 두기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_519',
                text: {
                  id: 'quest_tr5_19_q_task',
                  kr: '출발 신호 내리기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_518',
                text: {
                  id: 'quest_tr5_18_q_task',
                  kr: '표지판 세우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_516',
                text: {
                  id: 'quest_tr5_16_q_task',
                  kr: '모래사장 꾸미기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_503',
                text: {
                  id: 'quest_tr5_03_q_task',
                  kr: '경비행기 탑승장',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_501',
                text: {
                  id: 'quest_tr5_01_q_task',
                  kr: '탑승장 가는 길',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_506',
                text: {
                  id: 'quest_tr5_06_q_task',
                  kr: '경비행기 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_509',
                text: {
                  id: 'quest_tr5_09_q_task',
                  kr: '비행기 띄우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_320',
                text: {
                  id: 'quest_tr3_20_q_task',
                  kr: '바 주변에 화단 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_322',
                text: {
                  id: 'quest_tr3_22_q_task',
                  kr: '부두 꾸미기 (2)',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_321',
                text: {
                  id: 'quest_tr3_21_q_task',
                  kr: '부두 꾸미기 (1)',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_311',
                text: {
                  id: 'quest_tr3_11_q_task',
                  kr: '푸드코트 입구 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_316',
                text: {
                  id: 'quest_tr3_16_q_task',
                  kr: '푸드코트 가판대 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_315',
                text: {
                  id: 'quest_tr3_15_q_task',
                  kr: '키오스크 설치하기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_314',
                text: {
                  id: 'quest_tr3_14_q_task',
                  kr: '메뉴판 걸기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_319',
                text: {
                  id: 'quest_tr3_19_q_task',
                  kr: '포케 가게 간판 달기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_302',
                text: {
                  id: 'quest_tr3_02_q_task',
                  kr: '미니 정원 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_301',
                text: {
                  id: 'quest_tr3_01_q_task',
                  kr: '바 간판 달기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_306',
                text: {
                  id: 'quest_tr3_06_q_task',
                  kr: '위에 지붕 올리기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_305',
                text: {
                  id: 'quest_tr3_05_q_task',
                  kr: '진열장 채우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_304',
                text: {
                  id: 'quest_tr3_04_q_task',
                  kr: '진열장 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_303',
                text: {
                  id: 'quest_tr3_03_q_task',
                  kr: '바 테이블 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_309',
                text: {
                  id: 'quest_tr3_09_q_task',
                  kr: '야외에 자리 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_307',
                text: {
                  id: 'quest_tr3_07_q_task',
                  kr: '바 테이블 꾸미기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_411',
                text: {
                  id: 'quest_tr4_11_q_task',
                  kr: '해변에 자리 만들기 (1)',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_410',
                text: {
                  id: 'quest_tr4_10_q_task',
                  kr: '요트 띄우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_416',
                text: {
                  id: 'quest_tr4_16_q_task',
                  kr: '카약 설치하기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_415',
                text: {
                  id: 'quest_tr4_15_q_task',
                  kr: '해변에서 모래장난',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_413',
                text: {
                  id: 'quest_tr4_13_q_task',
                  kr: '해변에 자리 만들기 (2)',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_419',
                text: {
                  id: 'quest_tr4_19_q_task',
                  kr: '해변 입구 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_418',
                text: {
                  id: 'quest_tr4_18_q_task',
                  kr: '바다 위에 부표 띄우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_401',
                text: {
                  id: 'quest_tr4_01_q_task',
                  kr: '해변으로 가는 길',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_405',
                text: {
                  id: 'quest_tr4_05_q_task',
                  kr: '멋진 요트 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_402',
                text: {
                  id: 'quest_tr4_02_q_task',
                  kr: '요트 탑승장 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_409',
                text: {
                  id: 'quest_tr4_09_q_task',
                  kr: '돛대 달기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_408',
                text: {
                  id: 'quest_tr4_08_q_task',
                  kr: '요트 꾸미기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_720',
                text: {
                  id: 'quest_tr7_20_q_task',
                  kr: '짐 운반용 카트 두기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_721',
                text: {
                  id: 'quest_tr7_21_q_task',
                  kr: '튜브 리조트 오픈!',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_713',
                text: {
                  id: 'quest_tr7_13_q_task',
                  kr: '요리 공간 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_712',
                text: {
                  id: 'quest_tr7_12_q_task',
                  kr: '레스토랑 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_711',
                text: {
                  id: 'quest_tr7_11_q_task',
                  kr: '옷가게 오픈!',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_717',
                text: {
                  id: 'quest_tr7_17_q_task',
                  kr: '중앙에 구조물 세우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_716',
                text: {
                  id: 'quest_tr7_16_q_task',
                  kr: '광장 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_715',
                text: {
                  id: 'quest_tr7_15_q_task',
                  kr: '맛있는 스테이크 굽기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_714',
                text: {
                  id: 'quest_tr7_14_q_task',
                  kr: '식당 간판 달기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_701',
                text: {
                  id: 'quest_tr7_01_q_task',
                  kr: '리조트 입구 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_704',
                text: {
                  id: 'quest_tr7_04_q_task',
                  kr: '서핑 용품점 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_703',
                text: {
                  id: 'quest_tr7_03_q_task',
                  kr: '1층 상가 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_708',
                text: {
                  id: 'quest_tr7_08_q_task',
                  kr: '옷가게 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_707',
                text: {
                  id: 'quest_tr7_07_q_task',
                  kr: '서핑 용풍점 오픈',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_610',
                text: {
                  id: 'quest_tr6_10_q_task',
                  kr: '슬라이드 간판 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_614',
                text: {
                  id: 'quest_tr6_14_q_task',
                  kr: '썬베드 설치하기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_613',
                text: {
                  id: 'quest_tr6_13_q_task',
                  kr: '커다란 튜브 띄우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_612',
                text: {
                  id: 'quest_tr6_12_q_task',
                  kr: '벽 위 펜스 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_611',
                text: {
                  id: 'quest_tr6_11_q_task',
                  kr: '안전을 위한 벽 세우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_617',
                text: {
                  id: 'quest_tr6_17_q_task',
                  kr: '워터 슬라이드 꾸미기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_616',
                text: {
                  id: 'quest_tr6_16_q_task',
                  kr: '시원한 음료 준비하기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_615',
                text: {
                  id: 'quest_tr6_15_q_task',
                  kr: '그늘막으로 해 가리기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_603',
                text: {
                  id: 'quest_tr6_03_q_task',
                  kr: '대형 워터 슬라이드',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_601',
                text: {
                  id: 'quest_tr6_01_q_task',
                  kr: '워터 슬라이드 가는 길',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_607',
                text: {
                  id: 'quest_tr6_07_q_task',
                  kr: '정상에 야자수 심기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_606',
                text: {
                  id: 'quest_tr6_06_q_task',
                  kr: '내부 통로에 창문 달기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_609',
                text: {
                  id: 'quest_tr6_09_q_task',
                  kr: '워터 슬라이드 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_608',
                text: {
                  id: 'quest_tr6_08_q_task',
                  kr: '탑승장 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'tuberesort_620',
                text: {
                  id: 'quest_tr6_20_q_task',
                  kr: '워터 슬라이드 작동!',
                  en: '',
                  jp: ''
                }
              }
            ],
            '26': [
              {
                id: 'skycouncil_101',
                text: {
                  id: 'quest_sc1_01_q_task',
                  kr: '잔디 정리',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_102',
                text: {
                  id: 'quest_sc1_02_q_task',
                  kr: '신성한 목장 짓기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_105',
                text: {
                  id: 'quest_sc1_05_q_task',
                  kr: '볏짚 쌓기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_107',
                text: {
                  id: 'quest_sc1_07_q_task',
                  kr: '울타리 세우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_106',
                text: {
                  id: 'quest_sc1_06_q_task',
                  kr: '양 소환하기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_109',
                text: {
                  id: 'quest_sc1_09_q_task',
                  kr: '단상 세우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_108',
                text: {
                  id: 'quest_sc1_08_q_task',
                  kr: '깃발 세우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_110',
                text: {
                  id: 'quest_sc1_10_q_task',
                  kr: '목동의 악기 두기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_112',
                text: {
                  id: 'quest_sc1_12_q_task',
                  kr: '계단 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_111',
                text: {
                  id: 'quest_sc1_11_q_task',
                  kr: '동상 세우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_113',
                text: {
                  id: 'quest_sc1_13_q_task',
                  kr: '신전 탑 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_116',
                text: {
                  id: 'quest_sc1_16_q_task',
                  kr: '지붕 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_115',
                text: {
                  id: 'quest_sc1_15_q_task',
                  kr: '신성한 불 피우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_118',
                text: {
                  id: 'quest_sc1_18_q_task',
                  kr: '입구 간판 달기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_117',
                text: {
                  id: 'quest_sc1_17_q_task',
                  kr: '지붕 장식 올리기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_119',
                text: {
                  id: 'quest_sc1_19_q_task',
                  kr: '조경 꾸미기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_121',
                text: {
                  id: 'quest_sc1_21_q_task',
                  kr: '커다란 화분 놓기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_120',
                text: {
                  id: 'quest_sc1_20_q_task',
                  kr: '깃발 세우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_122',
                text: {
                  id: 'quest_sc1_22_q_task',
                  kr: '타일 깔기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_701',
                text: {
                  id: 'quest_sc7_01_q_task',
                  kr: '중앙 광장에 바닥 깔기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_703',
                text: {
                  id: 'quest_sc7_03_q_task',
                  kr: '중앙 단상 꾸미기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_702',
                text: {
                  id: 'quest_sc7_02_q_task',
                  kr: '바닥 무늬 넣기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_707',
                text: {
                  id: 'quest_sc7_07_q_task',
                  kr: '광장 가는 길 (1)',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_706',
                text: {
                  id: 'quest_sc7_06_q_task',
                  kr: '성으로 향하는 길',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_709',
                text: {
                  id: 'quest_sc7_09_q_task',
                  kr: '광장 가는 길 (2)',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_712',
                text: {
                  id: 'quest_sc7_12_q_task',
                  kr: '꽃으로 광장 꾸미기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_711',
                text: {
                  id: 'quest_sc7_11_q_task',
                  kr: '물가에 연잎 띄우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_714',
                text: {
                  id: 'quest_sc7_14_q_task',
                  kr: '광장으로 오는 길',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_715',
                text: {
                  id: 'quest_sc7_15_q_task',
                  kr: '광장 입구 꾸미기 (1)',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_717',
                text: {
                  id: 'quest_sc7_17_q_task',
                  kr: '광장 입구 꾸미기 (2)',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_719',
                text: {
                  id: 'quest_sc7_19_q_task',
                  kr: '무지개 빛 폭포',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_720',
                text: {
                  id: 'quest_sc7_20_q_task',
                  kr: '폭포 기둥 꾸미기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_722',
                text: {
                  id: 'quest_sc7_22_q_task',
                  kr: '마법 동상 세우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_602',
                text: {
                  id: 'quest_sc6_02_q_task',
                  kr: '비행선 타러 가는 길',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_601',
                text: {
                  id: 'quest_sc6_01_q_task',
                  kr: '건널목 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_603',
                text: {
                  id: 'quest_sc6_03_q_task',
                  kr: '열기구 비행선 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_606',
                text: {
                  id: 'quest_sc6_06_q_task',
                  kr: '열기구 꾸미기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_608',
                text: {
                  id: 'quest_sc6_08_q_task',
                  kr: '위험주의! 난간 설치',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_607',
                text: {
                  id: 'quest_sc6_07_q_task',
                  kr: '열기구 간판 달기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_609',
                text: {
                  id: 'quest_sc6_09_q_task',
                  kr: '열기구 이정표 띄우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_611',
                text: {
                  id: 'quest_sc6_11_q_task',
                  kr: '출발을 알리는 북',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_610',
                text: {
                  id: 'quest_sc6_10_q_task',
                  kr: '탑승구에 불 피우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_613',
                text: {
                  id: 'quest_sc6_13_q_task',
                  kr: '비행 유람선 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_612',
                text: {
                  id: 'quest_sc6_12_q_task',
                  kr: '유람선 타러 가는 길',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_617',
                text: {
                  id: 'quest_sc6_17_q_task',
                  kr: '탑승구에 난간 달기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_616',
                text: {
                  id: 'quest_sc6_16_q_task',
                  kr: '유람선에 돛 달기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_619',
                text: {
                  id: 'quest_sc6_19_q_task',
                  kr: '탑승구에 불 피우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_618',
                text: {
                  id: 'quest_sc6_18_q_task',
                  kr: '유람선 이정표 띄우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_620',
                text: {
                  id: 'quest_sc6_20_q_task',
                  kr: '매표소 짓기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_622',
                text: {
                  id: 'quest_sc6_22_q_task',
                  kr: '매표소 간판 달기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_623',
                text: {
                  id: 'quest_sc6_23_q_task',
                  kr: '출발 신호 뿔나팔',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_501',
                text: {
                  id: 'quest_sc5_01_q_task',
                  kr: '조선소로 가는 길',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_503',
                text: {
                  id: 'quest_sc5_03_q_task',
                  kr: '조선소 땅 다지기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_502',
                text: {
                  id: 'quest_sc5_02_q_task',
                  kr: '건널목 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_504',
                text: {
                  id: 'quest_sc5_04_q_task',
                  kr: '뚝딱뚝딱 배 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_506',
                text: {
                  id: 'quest_sc5_06_q_task',
                  kr: '조선소 건물 짓기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_510',
                text: {
                  id: 'quest_sc5_10_q_task',
                  kr: '조선소 간판 달기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_512',
                text: {
                  id: 'quest_sc5_12_q_task',
                  kr: '비행 구름 충전소',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_511',
                text: {
                  id: 'quest_sc5_11_q_task',
                  kr: '위험 주의! 난간 설치',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_513',
                text: {
                  id: 'quest_sc5_13_q_task',
                  kr: '비행선 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_516',
                text: {
                  id: 'quest_sc5_16_q_task',
                  kr: '비행선에 돛 달기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_517',
                text: {
                  id: 'quest_sc5_17_q_task',
                  kr: '화물 비행선 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_519',
                text: {
                  id: 'quest_sc5_19_q_task',
                  kr: '안전 난간 설치하기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_521',
                text: {
                  id: 'quest_sc5_21_q_task',
                  kr: '화물선에 짐 싣기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_520',
                text: {
                  id: 'quest_sc5_20_q_task',
                  kr: '화물 운반 크레인',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_523',
                text: {
                  id: 'quest_sc5_23_q_task',
                  kr: '광장으로 향하는 계단',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_522',
                text: {
                  id: 'quest_sc5_22_q_task',
                  kr: '공중 이정표 띄우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_420',
                text: {
                  id: 'quest_sc4_20_q_task',
                  kr: '태양 조명 설치하기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_422',
                text: {
                  id: 'quest_sc4_22_q_task',
                  kr: '예쁜 화단 꾸미기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_421',
                text: {
                  id: 'quest_sc4_21_q_task',
                  kr: '로맨틱 그네',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_424',
                text: {
                  id: 'quest_sc4_24_q_task',
                  kr: '중앙에 쉼터 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_426',
                text: {
                  id: 'quest_sc4_26_q_task',
                  kr: '음료용 테이블 두기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_425',
                text: {
                  id: 'quest_sc4_25_q_task',
                  kr: '편안한 벤치 두기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_428',
                text: {
                  id: 'quest_sc4_28_q_task',
                  kr: '와인 분수 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_427',
                text: {
                  id: 'quest_sc4_27_q_task',
                  kr: '깃발로 입구 장식하기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_402',
                text: {
                  id: 'quest_sc4_02_q_task',
                  kr: '풍류의 신전 건물 짓기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_401',
                text: {
                  id: 'quest_sc4_01_q_task',
                  kr: '입구에 계단 설치하기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_404',
                text: {
                  id: 'quest_sc4_04_q_task',
                  kr: '태양 조명 두기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_403',
                text: {
                  id: 'quest_sc4_03_q_task',
                  kr: '푸릇푸릇 화분 심기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_405',
                text: {
                  id: 'quest_sc4_05_q_task',
                  kr: '우측에 추가 건물 짓기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_408',
                text: {
                  id: 'quest_sc4_08_q_task',
                  kr: '좌측에 추가 건물 짓기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_411',
                text: {
                  id: 'quest_sc4_11_q_task',
                  kr: '신전 지붕 올리기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_413',
                text: {
                  id: 'quest_sc4_13_q_task',
                  kr: '신전 지붕에 음표 올리기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_412',
                text: {
                  id: 'quest_sc4_12_q_task',
                  kr: '엘리베이터 설치하기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_415',
                text: {
                  id: 'quest_sc4_15_q_task',
                  kr: '건물 장식하기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_414',
                text: {
                  id: 'quest_sc4_14_q_task',
                  kr: '출입구 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_416',
                text: {
                  id: 'quest_sc4_16_q_task',
                  kr: '와인용 포도밭 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_419',
                text: {
                  id: 'quest_sc4_19_q_task',
                  kr: '포도나무 더 심기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_418',
                text: {
                  id: 'quest_sc4_18_q_task',
                  kr: '포도밭 꾸미기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_301',
                text: {
                  id: 'quest_sc3_01_q_task',
                  kr: '대리석 바닥 깔기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_303',
                text: {
                  id: 'quest_sc3_03_q_task',
                  kr: '커다란 궁전 올리기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_302',
                text: {
                  id: 'quest_sc3_02_q_task',
                  kr: '잔디 광장 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_305',
                text: {
                  id: 'quest_sc3_05_q_task',
                  kr: '중앙 단상 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_307',
                text: {
                  id: 'quest_sc3_07_q_task',
                  kr: '천문대 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_306',
                text: {
                  id: 'quest_sc3_06_q_task',
                  kr: '좌측에 단상 세우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_310',
                text: {
                  id: 'quest_sc3_10_q_task',
                  kr: '좌측에 첨탑 세우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_312',
                text: {
                  id: 'quest_sc3_12_q_task',
                  kr: '좌측 단상에 조명 달기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_314',
                text: {
                  id: 'quest_sc3_14_q_task',
                  kr: '좌측 단상 꾸미기 (2)',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_313',
                text: {
                  id: 'quest_sc3_13_q_task',
                  kr: '좌측 단상 꾸미기 (1)',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_316',
                text: {
                  id: 'quest_sc3_16_q_task',
                  kr: '우측에 단상 세우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_315',
                text: {
                  id: 'quest_sc3_15_q_task',
                  kr: '단상 앞 의자 두기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_317',
                text: {
                  id: 'quest_sc3_17_q_task',
                  kr: '멋진 건물 올리기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_319',
                text: {
                  id: 'quest_sc3_19_q_task',
                  kr: '우측 첨탑 세우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_321',
                text: {
                  id: 'quest_sc3_21_q_task',
                  kr: '우측 단상에 조명 달기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_323',
                text: {
                  id: 'quest_sc3_23_q_task',
                  kr: '우측 단상 꾸미기 (2)',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_322',
                text: {
                  id: 'quest_sc3_22_q_task',
                  kr: '우측 단상 꾸미기 (1)',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_325',
                text: {
                  id: 'quest_sc3_25_q_task',
                  kr: '단상 위 난간 달기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_324',
                text: {
                  id: 'quest_sc3_24_q_task',
                  kr: '단상 앞 의자 두기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_326',
                text: {
                  id: 'quest_sc3_26_q_task',
                  kr: '궁전에 창문 달기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_329',
                text: {
                  id: 'quest_sc3_29_q_task',
                  kr: '찌릿찌릿 번개 발동',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_328',
                text: {
                  id: 'quest_sc3_28_q_task',
                  kr: '궁전 꼭대기에 장식 달기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_202',
                text: {
                  id: 'quest_sc2_02_q_task',
                  kr: '계단식 지형 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_201',
                text: {
                  id: 'quest_sc2_01_q_task',
                  kr: '신전 바닥 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_203',
                text: {
                  id: 'quest_sc2_03_q_task',
                  kr: '받침대 세우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_205',
                text: {
                  id: 'quest_sc2_05_q_task',
                  kr: '신전 세우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_208',
                text: {
                  id: 'quest_sc2_08_q_task',
                  kr: '수로 바닥 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_209',
                text: {
                  id: 'quest_sc2_09_q_task',
                  kr: '수로에 물 채우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_211',
                text: {
                  id: 'quest_sc2_11_q_task',
                  kr: '단상 꾸미기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_210',
                text: {
                  id: 'quest_sc2_10_q_task',
                  kr: '수로 끝에 단상 세우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_213',
                text: {
                  id: 'quest_sc2_13_q_task',
                  kr: '수호상 세우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_212',
                text: {
                  id: 'quest_sc2_12_q_task',
                  kr: '수로 주변 꾸미기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_215',
                text: {
                  id: 'quest_sc2_15_q_task',
                  kr: '동상 세우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_214',
                text: {
                  id: 'quest_sc2_14_q_task',
                  kr: '화로대 세우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_219',
                text: {
                  id: 'quest_sc2_19_q_task',
                  kr: '작은 화로 피우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_220',
                text: {
                  id: 'quest_sc2_20_q_task',
                  kr: '무지개 등장',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'skycouncil_221',
                text: {
                  id: 'quest_sc2_21_q_task',
                  kr: '펄럭이는 깃발들',
                  en: '',
                  jp: ''
                }
              }
            ],
            '27': [
              {
                id: 'technovalley_207',
                text: {
                  id: 'quest_tv2_07_q_task',
                  kr: '미니 전망탑',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_208',
                text: {
                  id: 'quest_tv2_08_q_task',
                  kr: '우측 전망탑',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_205',
                text: {
                  id: 'quest_tv2_05_q_task',
                  kr: '장식 띠 두르기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_206',
                text: {
                  id: 'quest_tv2_06_q_task',
                  kr: '대형 무지개 라이언',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_201',
                text: {
                  id: 'quest_tv2_01_q_task',
                  kr: '기반 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_202',
                text: {
                  id: 'quest_tv2_02_q_task',
                  kr: '마법궁전 세우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_223',
                text: {
                  id: 'quest_tv2_23_q_task',
                  kr: '입구 간판',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_221',
                text: {
                  id: 'quest_tv2_21_q_task',
                  kr: '우측 성벽 꾸미기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_222',
                text: {
                  id: 'quest_tv2_22_q_task',
                  kr: '좌측 성벽 꾸미기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_220',
                text: {
                  id: 'quest_tv2_20_q_task',
                  kr: '궁전 입구',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_218',
                text: {
                  id: 'quest_tv2_18_q_task',
                  kr: '무지개 계단 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_216',
                text: {
                  id: 'quest_tv2_16_q_task',
                  kr: '화단 꾸미기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_214',
                text: {
                  id: 'quest_tv2_14_q_task',
                  kr: '좌측 탑',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_215',
                text: {
                  id: 'quest_tv2_15_q_task',
                  kr: '대형 선글라스블록',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_212',
                text: {
                  id: 'quest_tv2_12_q_task',
                  kr: '좌측 전망탑',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_210',
                text: {
                  id: 'quest_tv2_10_q_task',
                  kr: '우측 탑',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_211',
                text: {
                  id: 'quest_tv2_11_q_task',
                  kr: '대형 모자블록',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_108',
                text: {
                  id: 'quest_tv1_08_q_task',
                  kr: '입국장 간판 설치',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_109',
                text: {
                  id: 'quest_tv1_09_q_task',
                  kr: '블록 소환 중',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_106',
                text: {
                  id: 'quest_tv1_06_q_task',
                  kr: '블록섞기 LED',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_107',
                text: {
                  id: 'quest_tv1_07_q_task',
                  kr: '입국심사장 가는 길',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_104',
                text: {
                  id: 'quest_tv1_04_q_task',
                  kr: '분리대 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_105',
                text: {
                  id: 'quest_tv1_05_q_task',
                  kr: '난간 설치하기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_102',
                text: {
                  id: 'quest_tv1_02_q_task',
                  kr: '대형큐브 받침대',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_101',
                text: {
                  id: 'quest_tv1_01_q_task',
                  kr: '대형 퍼즐게임 전광판',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_120',
                text: {
                  id: 'quest_tv1_20_q_task',
                  kr: '데이터 분석실',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_119',
                text: {
                  id: 'quest_tv1_19_q_task',
                  kr: '에스컬레이터',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_117',
                text: {
                  id: 'quest_tv1_17_q_task',
                  kr: '데이터 집계화면',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_115',
                text: {
                  id: 'quest_tv1_15_q_task',
                  kr: '비상용 버튼',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_116',
                text: {
                  id: 'quest_tv1_16_q_task',
                  kr: '입국심사장 요원',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_113',
                text: {
                  id: 'quest_tv1_13_q_task',
                  kr: 'BRAVO 간판',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_114',
                text: {
                  id: 'quest_tv1_14_q_task',
                  kr: '블록 스캔기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_111',
                text: {
                  id: 'quest_tv1_11_q_task',
                  kr: '입국심사장 로봇',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_110',
                text: {
                  id: 'quest_tv1_10_q_task',
                  kr: '안전 유리판',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_409',
                text: {
                  id: 'quest_tv4_09_q_task',
                  kr: '광장 잔디 깔기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_408',
                text: {
                  id: 'quest_tv4_08_q_task',
                  kr: '난간 설치',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_405',
                text: {
                  id: 'quest_tv4_05_q_task',
                  kr: '스낵 자판기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_406',
                text: {
                  id: 'quest_tv4_06_q_task',
                  kr: '티 테이블',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_403',
                text: {
                  id: 'quest_tv4_03_q_task',
                  kr: '정수기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_404',
                text: {
                  id: 'quest_tv4_04_q_task',
                  kr: '커피 자판기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_401',
                text: {
                  id: 'quest_tv4_01_q_task',
                  kr: '차량 차고지',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_402',
                text: {
                  id: 'quest_tv4_02_q_task',
                  kr: '보석 운반차량',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_423',
                text: {
                  id: 'quest_tv4_23_q_task',
                  kr: '아치형 울타리',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_422',
                text: {
                  id: 'quest_tv4_22_q_task',
                  kr: '보석 조형물',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_420',
                text: {
                  id: 'quest_tv4_20_q_task',
                  kr: '하트 계단',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_418',
                text: {
                  id: 'quest_tv4_18_q_task',
                  kr: '보석 블록',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_416',
                text: {
                  id: 'quest_tv4_16_q_task',
                  kr: '티켓 바닥 깔기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_417',
                text: {
                  id: 'quest_tv4_17_q_task',
                  kr: '가로등 설치',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_415',
                text: {
                  id: 'quest_tv4_15_q_task',
                  kr: '뽑기 입구',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_413',
                text: {
                  id: 'quest_tv4_13_q_task',
                  kr: '액체 연결관',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_410',
                text: {
                  id: 'quest_tv4_10_q_task',
                  kr: '공원 조형물',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_308',
                text: {
                  id: 'quest_tv3_08_q_task',
                  kr: '보석 운반대',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_309',
                text: {
                  id: 'quest_tv3_09_q_task',
                  kr: '선별소 바리게이트',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_307',
                text: {
                  id: 'quest_tv3_07_q_task',
                  kr: '포장도로 깔기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_304',
                text: {
                  id: 'quest_tv3_04_q_task',
                  kr: '채굴용 수레',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_305',
                text: {
                  id: 'quest_tv3_05_q_task',
                  kr: '커다란 용액 솥',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_302',
                text: {
                  id: 'quest_tv3_02_q_task',
                  kr: '조명 설치',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_303',
                text: {
                  id: 'quest_tv3_03_q_task',
                  kr: '레일 깔기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_301',
                text: {
                  id: 'quest_tv3_01_q_task',
                  kr: '광산 입구',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_324',
                text: {
                  id: 'quest_tv3_24_q_task',
                  kr: '코인 계단',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_322',
                text: {
                  id: 'quest_tv3_22_q_task',
                  kr: '은행 계단',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_323',
                text: {
                  id: 'quest_tv3_23_q_task',
                  kr: '대형 보석 장식',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_320',
                text: {
                  id: 'quest_tv3_20_q_task',
                  kr: '은행 건물',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_319',
                text: {
                  id: 'quest_tv3_19_q_task',
                  kr: '틀 변형실',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_318',
                text: {
                  id: 'quest_tv3_18_q_task',
                  kr: '실험실 간판',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_315',
                text: {
                  id: 'quest_tv3_15_q_task',
                  kr: '콘 구슬 제작실',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_313',
                text: {
                  id: 'quest_tv3_13_q_task',
                  kr: '용액 채우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_314',
                text: {
                  id: 'quest_tv3_14_q_task',
                  kr: '연결 튜브',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_310',
                text: {
                  id: 'quest_tv3_10_q_task',
                  kr: '콘 큐브 제작소',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_607',
                text: {
                  id: 'quest_tv6_07_q_task',
                  kr: '환풍기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_608',
                text: {
                  id: 'quest_tv6_08_q_task',
                  kr: '대형 팔레트 장식',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_605',
                text: {
                  id: 'quest_tv6_05_q_task',
                  kr: '블록 세차장',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_606',
                text: {
                  id: 'quest_tv6_06_q_task',
                  kr: '세차장 입구',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_603',
                text: {
                  id: 'quest_tv6_03_q_task',
                  kr: '벤치와 가로등',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_604',
                text: {
                  id: 'quest_tv6_04_q_task',
                  kr: '큐브 조형물',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_601',
                text: {
                  id: 'quest_tv6_01_q_task',
                  kr: '공사중 안내',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_602',
                text: {
                  id: 'quest_tv6_02_q_task',
                  kr: '보석 운송 차량',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_621',
                text: {
                  id: 'quest_tv6_21_q_task',
                  kr: '블록 세탁기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_620',
                text: {
                  id: 'quest_tv6_20_q_task',
                  kr: '떨어지는 블록들',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_618',
                text: {
                  id: 'quest_tv6_18_q_task',
                  kr: '대형 스크린',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_619',
                text: {
                  id: 'quest_tv6_19_q_task',
                  kr: '출국심사장 로봇',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_616',
                text: {
                  id: 'quest_tv6_16_q_task',
                  kr: '블록 미끄럼틀',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_614',
                text: {
                  id: 'quest_tv6_14_q_task',
                  kr: '안전 유리판',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_615',
                text: {
                  id: 'quest_tv6_15_q_task',
                  kr: '출국심사장 요원',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_612',
                text: {
                  id: 'quest_tv6_12_q_task',
                  kr: '컨베이어벨트 설치',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_613',
                text: {
                  id: 'quest_tv6_13_q_task',
                  kr: '엑스레이 화면',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_610',
                text: {
                  id: 'quest_tv6_10_q_task',
                  kr: '붓 장식 올리기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_508',
                text: {
                  id: 'quest_tv5_08_q_task',
                  kr: '정거장 중앙 건물',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_509',
                text: {
                  id: 'quest_tv5_09_q_task',
                  kr: '정거장 우측 건물',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_506',
                text: {
                  id: 'quest_tv5_06_q_task',
                  kr: '전광판 설치',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_507',
                text: {
                  id: 'quest_tv5_07_q_task',
                  kr: '정거장 좌측 건물',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_502',
                text: {
                  id: 'quest_tv5_02_q_task',
                  kr: '벽돌길 만들기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_503',
                text: {
                  id: 'quest_tv5_03_q_task',
                  kr: '안내탑 세우기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_501',
                text: {
                  id: 'quest_tv5_01_q_task',
                  kr: '가로등 설치',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_522',
                text: {
                  id: 'quest_tv5_22_q_task',
                  kr: '웰컴 동상',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_521',
                text: {
                  id: 'quest_tv5_21_q_task',
                  kr: '안전수칙 안내판',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_517',
                text: {
                  id: 'quest_tv5_17_q_task',
                  kr: '탑승 대기 구역',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_518',
                text: {
                  id: 'quest_tv5_18_q_task',
                  kr: '모노레일 설치',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_515',
                text: {
                  id: 'quest_tv5_15_q_task',
                  kr: '카펫 깔기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_516',
                text: {
                  id: 'quest_tv5_16_q_task',
                  kr: '난간 설치',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_513',
                text: {
                  id: 'quest_tv5_13_q_task',
                  kr: '미니 차양 설치',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_514',
                text: {
                  id: 'quest_tv5_14_q_task',
                  kr: '입구 조명',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_511',
                text: {
                  id: 'quest_tv5_11_q_task',
                  kr: '종 장식 달기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_512',
                text: {
                  id: 'quest_tv5_12_q_task',
                  kr: '벤치 설치',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_510',
                text: {
                  id: 'quest_tv5_10_q_task',
                  kr: '지붕 덮기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_708',
                text: {
                  id: 'quest_tv7_08_q_task',
                  kr: '컨베이어벨트',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_709',
                text: {
                  id: 'quest_tv7_09_q_task',
                  kr: '아이템 파이프',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_704',
                text: {
                  id: 'quest_tv7_04_q_task',
                  kr: '안전감지용 사이렌',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_705',
                text: {
                  id: 'quest_tv7_05_q_task',
                  kr: '아이템 선별소',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_702',
                text: {
                  id: 'quest_tv7_02_q_task',
                  kr: '다양한 아이템 블록들',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_703',
                text: {
                  id: 'quest_tv7_03_q_task',
                  kr: '컨베이어벨트 입구',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_701',
                text: {
                  id: 'quest_tv7_01_q_task',
                  kr: '대형 아이템 박스',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_719',
                text: {
                  id: 'quest_tv7_19_q_task',
                  kr: '티켓 바닥판',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_718',
                text: {
                  id: 'quest_tv7_18_q_task',
                  kr: '출국 안내판',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_715',
                text: {
                  id: 'quest_tv7_15_q_task',
                  kr: '대형 전광판',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_716',
                text: {
                  id: 'quest_tv7_16_q_task',
                  kr: '출국 심사장',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_713',
                text: {
                  id: 'quest_tv7_13_q_task',
                  kr: '안전 요원',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_714',
                text: {
                  id: 'quest_tv7_14_q_task',
                  kr: '안전 유리판',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_711',
                text: {
                  id: 'quest_tv7_11_q_task',
                  kr: '대형 돋보기',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_712',
                text: {
                  id: 'quest_tv7_12_q_task',
                  kr: '비상버튼',
                  en: '',
                  jp: ''
                }
              },
              {
                id: 'technovalley_710',
                text: {
                  id: 'quest_tv7_10_q_task',
                  kr: '아이템 운반하기',
                  en: '',
                  jp: ''
                }
              }
            ]
          }
        }
      },
      has_complete_quest: false,
      last_clear_quest_id: 'tuberesort_101',
      town_list: {
        '11': true,
        '12': true,
        '13': true,
        '14': true,
        '15': true,
        '16': true,
        '17': true,
        '18': true,
        '19': true,
        '20': true,
        '21': true,
        '22': true,
        '23': true,
        '24': true,
        '25': false
      },
      time_token_coupon: null,
      inventory: {
        '400': 2
      },
      star_rewards: [],
      deco_points: 6483,
      deco_ranking: {
        playerId: '990378929156885',
        rank: 18,
        score: 6483,
        highscore: 48894,
        cardinality: 1240,
        property: null,
        seasonSeq: 0
      },
      has_guild: true
    }
  ];

  setUserData(feed[0]);

  return (
    <>
      <UserInfoTop
        nickname={feed[0].nickname}
        profile={feed[0].public_profile}
      />
      <UserInfo />
    </>
  );
};

export default SearchResult;
